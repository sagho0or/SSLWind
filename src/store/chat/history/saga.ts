import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchChatHistory, fetchChatHistorySuccess, fetchChatHistoryFailure } from './slice';

import { SagaInputActionInterface } from '@/store/_interfaces/sagaInputAction.interface';
import errorHandling from '@/store/_utils/errorHandling';
import { useCookies } from 'react-cookie';
import axiosInterceptorInstance from "@/store/axios";
import {Cookies} from 'react-cookie';

function* ApiCall(action: SagaInputActionInterface): Generator<any> {

  const cookies = new Cookies();
  const { chatId, page } = action.payload;
  
  try {
    const response: any = yield call(
        axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}chatbot/history/${chatId}?page=${page}`,
      {
        timeout: Number(process.env.API_TIME_OUT),
        headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
      },
    );
    
    
    yield put(fetchChatHistorySuccess(response?.data));
  } catch (error: any) {
    yield errorHandling(error, fetchChatHistoryFailure);
  }
}

export default function* chatSaga() {
  yield takeLatest(fetchChatHistory.type, ApiCall);
}