
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_COINS_LOADING, getCoinsError, getCoinsSuccess } from '@/store/comparison/getCoins/action';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(): Generator<any> {
  try {
    const response: any = yield call(axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}coins`,
      {
        timeout: Number(process.env.API_TIME_OUT),
      });
    yield put(getCoinsSuccess(response?.data?.message));
  } catch (error: any) {
    yield errorHandling(error, getCoinsError);
  }
}

export default function* getCoinsSaga() {
  yield takeLatest(GET_COINS_LOADING, ApiCall);
}