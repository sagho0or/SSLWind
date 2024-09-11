
import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import { LoginOtpResponseInterface } from '@/store/auth/login/otp/loginOtpResponse.interface';
import axiosInterceptorInstance from "@/store/axios";
import { SagaInputActionInterface } from '@/store/_interfaces/sagaInputAction.interface';
import { loginOtpFailure, loginOtpLoading, loginOtpSuccess } from './slice';

function* ApiCall(action: SagaInputActionInterface): Generator<any> {
  const dataForm = action.payload;
  try {
    const response: any = yield call(axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/login/verify/otp`,
      dataForm,
      {
        timeout: Number(process.env.API_TIME_OUT),
      },)
    const successRes: LoginOtpResponseInterface = response?.data;
    yield put(loginOtpSuccess(successRes))
  }catch (error: any){
    yield errorHandling(error, loginOtpFailure);
  }
}

export default function* loginOtpSaga(){
  yield takeLatest(loginOtpLoading.type, ApiCall);
}