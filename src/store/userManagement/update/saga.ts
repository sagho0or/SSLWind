import { takeLatest, put, call } from 'redux-saga/effects';
import { updateUserRequest, updateUserSuccess, updateUserFailure } from './slice';
import { SagaInputActionInterface } from '@/store/_interfaces/sagaInputAction.interface';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import { Cookies } from 'react-cookie';

function* ApiCall(action: SagaInputActionInterface): Generator<any> {
  const { email, password, role, userId } = action.payload;

  try {
    const response: any = yield call(
      axiosInterceptorInstance.put,
      `${process.env.NEXT_PUBLIC_BASE_URL}user/edit/${userId}`,
      action.payload,
      {
        timeout: Number(process.env.API_TIME_OUT)
      },
    );
    yield put(updateUserSuccess(response?.data));
  } catch (error: any) {
    yield errorHandling(error, updateUserFailure);
  }
}

export default function* updateUserSaga() {
  yield takeLatest(updateUserRequest.type, ApiCall);
}
