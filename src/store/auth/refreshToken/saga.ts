
import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import { REFRESH_TOKEN_LOADING, refreshTokenFailure, refreshTokenSuccess } from '@/store/auth/refreshToken/action';
import axiosInterceptorInstance from "@/store/axios";
import {Cookies} from "react-cookie";

function* ApiCall(action: any): Generator<any> {
  const cookies = new Cookies();
  try {
    const response: any = yield call(axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/login/refresh/token/`,
        {
          refresh_token: cookies.get('auth-refresh')
        },
      {
        timeout: Number(process.env.API_TIME_OUT),
      });
    yield put(refreshTokenSuccess());
  } catch (error: any) {
    yield errorHandling(error, refreshTokenFailure)
  }
}

export default function* refreshTokenSaga() {
  yield takeLatest(REFRESH_TOKEN_LOADING, ApiCall);
}