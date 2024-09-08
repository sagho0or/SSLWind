import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchUserList, fetchUserListSuccess, fetchUserListFailure } from './slice';
import { SagaInputActionInterface } from '@/store/_interfaces/sagaInputAction.interface';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import {Cookies} from 'react-cookie';

function* ApiCall(action: SagaInputActionInterface): Generator<any> {
  const cookies = new Cookies();
  
  try {
    const response: any = yield call(
        axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}user/list`,
      {
        timeout: Number(process.env.API_TIME_OUT)
      },
    );

    yield put(fetchUserListSuccess(response?.data));
  } catch (error: any) {
    yield errorHandling(error, fetchUserListFailure);
  }
}

export default function* UserListSaga() {
  yield takeLatest(fetchUserList.type, ApiCall);
}