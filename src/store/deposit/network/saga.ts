import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_NETWORK_LOADING, getNetworkFailure, getNetworkSuccess } from '@/store/deposit/network/action';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";


function* ApiCall(action: any): Generator<any> {
  try {
    const response: any = yield call(axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}/coins/networks/`,
      {
        timeout: Number(process.env.API_TIME_OUT),
      });
    yield put(getNetworkSuccess(response.data.message));
  } catch (error) {
    yield errorHandling(error, getNetworkFailure);
  }
}

export default function* getNetworksSaga() {
  yield takeLatest(GET_NETWORK_LOADING, ApiCall);
}