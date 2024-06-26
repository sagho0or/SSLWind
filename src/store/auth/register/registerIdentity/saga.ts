
import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import {REGISTER_IDENTITY_LOADING, registerIdentityFailure, registerIdentitySuccess} from "@/store/auth/register/registerIdentity/action";
import { registerIdentityResponseInterface } from './registerIdentity.interface';
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(action: any): Generator<any> {
  const data = action.data;
  try {
    const response: any = yield call(axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/register/complete/`,
      data,
      {
        timeout: Number(process.env.API_TIME_OUT),
      });
    const successRes: registerIdentityResponseInterface = response?.data?.message;
    yield put(registerIdentitySuccess(successRes));
  } catch (error: any) {
    yield errorHandling(error, registerIdentityFailure)
  }
}

export default function* registerIdentitySaga() {
  yield takeLatest(REGISTER_IDENTITY_LOADING, ApiCall);
}