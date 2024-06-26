
import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import { RESEND_OTP_SMS_LOADING, resendOtpSmsFailure, resendOtpSmsSuccess } from '@/store/auth/otp/resendOtpSms/action';
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(action: any): Generator<any> {
  const data = action.data;
  try {
    const response: any = yield call(axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/resend/otp/sms/`,
      data,
      {
        timeout: Number(process.env.API_TIME_OUT),
      });
    yield put(resendOtpSmsSuccess());
  } catch (error: any) {
    yield errorHandling(error, resendOtpSmsFailure)
  }
}

export default function* resendOtpSmsSaga() {
  yield takeLatest(RESEND_OTP_SMS_LOADING, ApiCall);
}