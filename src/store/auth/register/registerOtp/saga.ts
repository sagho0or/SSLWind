
import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import {REGISTER_OTP_LOADING, registerOtpFailure, registerOtpSuccess} from '@/store/auth/register/registerOtp/action';
import {registerOtpResponseInterface} from "@/store/auth/register/registerOtp/registerOtp.interface";
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(action: any): Generator<any> {
  const data = action.data;
  try {
    const response: any = yield call(axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/register/verify/otp/`,
      data,
      {
        timeout: Number(process.env.API_TIME_OUT),
      });
    const successRes: registerOtpResponseInterface = response?.data?.message;
    yield put(registerOtpSuccess(successRes));
  } catch (error: any) {
    yield errorHandling(error, registerOtpFailure)
  }
}

export default function* registerOtpSaga() {
  yield takeLatest(REGISTER_OTP_LOADING, ApiCall);
}