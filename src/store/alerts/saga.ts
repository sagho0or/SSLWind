import { call, put, takeLatest, select } from 'redux-saga/effects';
import axiosInterceptorInstance from "@/store/axios";
import { Cookies } from 'react-cookie';
import {
  fetchAlertListRequest,
  fetchAlertListSuccess,
  fetchAlertListFailure,
  incrementPage,
  resetList
} from './slice';

function* fetchAlertListSaga(action: any): Generator<any, void, any> {
  const cookies = new Cookies();
  const state = yield select((state) => state.alertList);
  const { page, filterTitle, filterDate } = state;

  try {
    const response = yield call(
      axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}alert/list?page=${page}&title=${filterTitle}&date=${filterDate}`,
      {
        headers: { authorization: `Bearer ${cookies.get('auth-token')}` },
      }
    );

    yield put(fetchAlertListSuccess(response.data.items));
    yield put(incrementPage());
  } catch (error) {
    yield put(fetchAlertListFailure());
  }
}

export default function* alertListSaga() {
  yield takeLatest(fetchAlertListRequest.type, fetchAlertListSaga);
}
