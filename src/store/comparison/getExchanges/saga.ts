
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_EXCHANGES_LOADING, getExchangesError, getExchangesSuccess } from '@/store/comparison/getExchanges/action';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(action: any): Generator<any> {
  const parameters = action.parameter;

  try {
    const response: any = yield call(axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}rover/price/`,
      {
        params: parameters,
        timeout: Number(process.env.API_TIME_OUT),
      });
    yield put(getExchangesSuccess(response?.data?.message));
  } catch (error: any) {
    yield errorHandling(error, getExchangesError);
  }
}

export default function* getExchangesSaga() {
  yield takeLatest(GET_EXCHANGES_LOADING, ApiCall);
}