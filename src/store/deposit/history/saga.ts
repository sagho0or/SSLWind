
import { call, put, takeLatest } from 'redux-saga/effects';
import {Cookies} from 'react-cookie';
import errorHandling from "@/store/_utils/errorHandling";
import {
  GET_DEPOSITHISTORY_LOADING,
  getDepositHistoryFailure,
  getDepositHistorySuccess
} from "@/store/deposit/history/action";
import {
    DepositHistoryParams
} from "@/store/deposit/history/depositHistory.interface";
import axiosInterceptorInstance from "@/store/axios";


function* ApiCall(action: any): Generator<any> {

    const cookies = new Cookies();
    const params: DepositHistoryParams = action.data;
  try {
    const response: any = yield call(axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}wallet/history/deposit?limit=${params.limit}&offset=${params.offset}&symbol=${params.symbol}&from_date=${params.from_date||''}&to_date=${params.to_date||''}`,
      {
        timeout: Number(process.env.API_TIME_OUT),
          headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
      });
    yield put((getDepositHistorySuccess(response.data.message)));
  }catch (error: any) {
    yield errorHandling(error, getDepositHistoryFailure);
  }
}

export default function* getDepositHistorySaga() {
  yield takeLatest(GET_DEPOSITHISTORY_LOADING, ApiCall);
}