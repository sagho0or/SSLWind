
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  REGISTER_MOBILE_LOADING,
  registerMobileFailure,
  registerMobileSuccess,
} from '@/store/auth/register/registerMobile/action';
import errorHandling from '@/store/_utils/errorHandling';
import { registerMobileResponseInterface } from '@/store/auth/register/registerMobile/registerMobile.interface';
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(action: any): Generator<any> {
  const data = action.data;
  try {
    const response: any = yield call(axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/register/signup/`,
      data,
      {
        timeout: Number(process.env.API_TIME_OUT),
      });
    const successRes: registerMobileResponseInterface = response?.data?.message;
    yield put(registerMobileSuccess(successRes));
  } catch (error: any) {
    yield errorHandling(error, registerMobileFailure)
  }
}

export default function* registerMobileSaga() {
  yield takeLatest(REGISTER_MOBILE_LOADING, ApiCall);
}