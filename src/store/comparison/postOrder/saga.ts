
import { call, put, takeLatest } from 'redux-saga/effects';
import { POST_ORDER_LOADING, postOrderError, postOrderSuccess } from '@/store/comparison/postOrder/action';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(action: any): Generator<any> {

  try {
    yield call(
        axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}rover/order/${action.inputData.exchangeId}/`,
      {track_id: action.inputData.track_id},
      {
        timeout: Number(process.env.API_TIME_OUT),
        headers: {Authorization: 'Bearer ' + action.inputData.cookie}
      });
    yield put(postOrderSuccess());
  } catch (error: any) {
      yield errorHandling(error, postOrderError);
  }
}

export default function* postOrderSaga() {
  yield takeLatest(POST_ORDER_LOADING, ApiCall);
}