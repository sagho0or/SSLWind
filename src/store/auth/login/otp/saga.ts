
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_OTP_LOADING, loginOtpFailure, loginOtpSuccess } from '@/store/auth/login/otp/actions';
import errorHandling from '@/store/_utils/errorHandling';
import { LoginOtpResponseInterface } from '@/store/auth/login/otp/loginOtpResponse.interface';
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(action: any): Generator<any> {
  const dataForm = action.data;
  try {
    const response: any = yield call(axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/login/verify/otp/`,
      dataForm,
      {
        timeout: Number(process.env.API_TIME_OUT),
      },)
    const successRes: LoginOtpResponseInterface = response?.data?.message;
    yield put(loginOtpSuccess(successRes))
  }catch (error: any){
    yield errorHandling(error, loginOtpFailure);
  }
}

export default function* loginOtpSaga(){
  yield takeLatest(LOGIN_OTP_LOADING, ApiCall);
}