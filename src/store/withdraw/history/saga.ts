
import { call, put, takeLatest } from 'redux-saga/effects';
import {Cookies} from 'react-cookie';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";
import {
    WithdrawHistoryParams
} from "@/store/withdraw/history/withdrawHistory.interface";
import {
    GET_WITHDRAWHISTORY_LOADING,
    getWithdrawHistoryFailure,
    getWithdrawHistorySuccess
} from "@/store/withdraw/history/action";


function* ApiCall(action: any): Generator<any> {

    const cookies = new Cookies();
    const params: WithdrawHistoryParams = action.data;
  try {
    const response: any = yield call(axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}withdraw/users/history/?limit=${params.limit}&offset=${params.offset}&symbol=${params.symbol}&from_date=${params.from_date||''}&to_date=${params.to_date||''}`,
      {
        timeout: Number(process.env.API_TIME_OUT),
          headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
      });
    yield put((getWithdrawHistorySuccess(response.data.message)));
  }catch (error: any) {
    yield errorHandling(error, getWithdrawHistoryFailure);
  }
}

export default function* getWithdrawHistorySaga() {
  yield takeLatest(GET_WITHDRAWHISTORY_LOADING, ApiCall);
}