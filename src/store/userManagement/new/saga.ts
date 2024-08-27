import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchUserManagementResponse, fetchUserManagementResponseSuccess, fetchUserManagementResponseFailure } from './slice';
import { SagaInputActionInterface } from '@/store/_interfaces/sagaInputAction.interface';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import {Cookies} from 'react-cookie';

function* ApiCall(action: SagaInputActionInterface): Generator<any> {

  const cookies = new Cookies();
  const { email, password, role, userId } = action.payload;

 
  try {
    let response: any = yield call(
      axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}user/add/`,
      action.payload,
    {
      timeout: Number(process.env.API_TIME_OUT),
      headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
    },
  );
    
    
    yield put(fetchUserManagementResponseSuccess(response?.data));
  } catch (error: any) {
    yield errorHandling(error, fetchUserManagementResponseFailure);
  }
}

export default function* userManagementSaga() {
  yield takeLatest(fetchUserManagementResponse.type, ApiCall);
}