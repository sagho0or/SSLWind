
import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import { REGISTER_PASSWORD_LOADING, registerPasswordFailure, registerPasswordSuccess } from '@/store/auth/register/registerPassword/action';
import { registerPasswordResponseInterface } from './registerPassword.interface';
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(action: any): Generator<any> {
  const data = action.data;
  try {
    const response: any = yield call(axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/register/password/set/`,
      data,
      {
        timeout: Number(process.env.API_TIME_OUT),
      });
    const successRes: registerPasswordResponseInterface = response?.data?.message;
    yield put(registerPasswordSuccess(successRes));
  } catch (error: any) {
    yield errorHandling(error, registerPasswordFailure)
  }
}

export default function* registerPasswordSaga() {
  yield takeLatest(REGISTER_PASSWORD_LOADING, ApiCall);
}