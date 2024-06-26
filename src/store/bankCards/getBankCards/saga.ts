import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_CARDS_LOADING,
  getCardsSuccess,
  getCardsFailure,
} from './actions';
import errorHandling from '@/store/_utils/errorHandling';
import {Cookies} from "react-cookie";
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(): Generator<any> {
  const cookies = new Cookies();
  try {
    const response: any = yield call(
        axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}user/account/card/`,
      {
        timeout: Number(process.env.API_TIME_OUT),
        headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
      },
    );

    yield put(getCardsSuccess(response?.data?.message));
  } catch (error: any) {
    yield errorHandling(error, getCardsFailure);
  }
}

export default function* getCardsSaga() {
  yield takeLatest(GET_CARDS_LOADING, ApiCall);
}