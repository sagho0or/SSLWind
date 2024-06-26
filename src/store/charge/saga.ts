import { call, put, takeLatest } from 'redux-saga/effects';
import { POST_CHARGE_LOADING, postChargeFailure, postChargeSuccess } from '@/store/charge/action';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import {Cookies} from "react-cookie";


function *ApiCall (action: any): Generator<any> {
  const data = action.data;
  const cookies = new Cookies();
  try {
    const response: any = yield call(axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}ipg/charge/`,
      data,
      {
        timeout: Number(process.env.API_TIME_OUT),
        headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
      });
    yield put(postChargeSuccess(response?.data.message?.url));
  } catch (error: any) {
    yield errorHandling(error, postChargeFailure)
  }
}

export default function* postChargeSaga() {
  yield takeLatest(POST_CHARGE_LOADING, ApiCall);
}