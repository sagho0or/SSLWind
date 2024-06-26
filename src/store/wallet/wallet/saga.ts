
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_WALLET_LOADING, getWalletFailure, getWalletSuccess } from './action';
import {Cookies} from 'react-cookie';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";


function* ApiCall(): Generator<any> {

    const cookies = new Cookies();
  try {
    const response: any = yield call(axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}wallet/`,
      {
        timeout: Number(process.env.API_TIME_OUT),
          headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
      });
    yield put((getWalletSuccess(response.data.message)));
  }catch (error: any) {
    yield errorHandling(error, getWalletFailure);
  }
}

export default function* getWalletSaga() {
  yield takeLatest(GET_WALLET_LOADING, ApiCall);
}