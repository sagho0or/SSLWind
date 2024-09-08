import { call, put, takeLatest, select } from 'redux-saga/effects';
import axiosInterceptorInstance from "@/store/axios";
import { Cookies } from 'react-cookie';
import {
  fetchAlertRequest,
  fetchAlertSuccess,
  fetchAlertFailure,
} from './slice';

function* fetchAlertSaga(action: any): Generator<any, void, any> {
  const cookies = new Cookies();
  const state = yield select((state) => state.alert);
  const { id } = state;

  try {
    const response = yield call(
      axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}alert/${id}`
    );

    yield put(fetchAlertSuccess(response.data.data));
  } catch (error) {
    yield put(fetchAlertFailure());
  }
}

export default function* alertSaga() {
  yield takeLatest(fetchAlertRequest.type, fetchAlertSaga);
}
