import { takeLatest, put, call } from 'redux-saga/effects';
import { loginLoading, loginSuccess, loginFailure } from './slice';

import { SagaInputActionInterface } from '@/store/_interfaces/sagaInputAction.interface';
import errorHandling from '@/store/_utils/errorHandling';
import { useCookies } from 'react-cookie';
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(action: SagaInputActionInterface): Generator<any> {

  const dataForm = action.payload;
  console.log('dataFormdataFormdat', action);
  try {
    const response: any = yield call(
        axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}auth/login/`,
      dataForm,
      {
        timeout: Number(process.env.API_TIME_OUT),
      },
    );

    yield put(loginSuccess(response?.data));
  } catch (error: any) {
    yield errorHandling(error, loginFailure);
  }
}

export default function* loginSaga() {
  yield takeLatest(loginLoading.type, ApiCall);
}