import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchChatResponse, fetchChatResponseSuccess, fetchChatResponseFailure } from './slice';

import { SagaInputActionInterface } from '@/store/_interfaces/sagaInputAction.interface';
import errorHandling from '@/store/_utils/errorHandling';
import { useCookies } from 'react-cookie';
import axiosInterceptorInstance from "@/store/axios";
import {Cookies} from 'react-cookie';

function* ApiCall(action: SagaInputActionInterface): Generator<any> {

  const cookies = new Cookies();
  const dataForm = action.payload;
  console.log('dataFormdataFormdat', action);
  
  debugger;
  try {
    const response: any = yield call(
        axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}chatbot/new/`,
      dataForm,
      {
        timeout: Number(process.env.API_TIME_OUT),
        headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
      },
    );
    debugger;
    yield put(fetchChatResponseSuccess(response?.data));
  } catch (error: any) {
    yield errorHandling(error, fetchChatResponseFailure);
  }
}

export default function* chatSaga() {
  yield takeLatest(fetchChatResponse.type, ApiCall);
}