import { call, put, takeLatest, select } from 'redux-saga/effects';
import { fetchChatHistoryListRequest, fetchChatHistoryListSuccess, fetchChatHistoryListFailure, incrementPage } from './slice';
import axiosInterceptorInstance from "@/store/axios";
import { Cookies } from 'react-cookie';
import { AxiosResponse } from 'axios';

interface ChatHistoryItem {
    id: string;
    date: string;
    title: string;
  }
  
  interface ChatHistoryApiResponse {
    status: string;
    page: number;
    totalPages: number;
    items: ChatHistoryItem[];
  }
  
  // Define the state shape
  interface State {
    chatHistoryList: {
      page: number;
    };
  }
  
function* ApiCall(): Generator<any, void, AxiosResponse<ChatHistoryApiResponse>> {
    const cookies = new Cookies();
    const page = yield select((state: State) => state.chatHistoryList.page);
    try {
        const response = yield call(
            axiosInterceptorInstance.get,
            `${process.env.NEXT_PUBLIC_BASE_URL}chatbot/history/list?page=${page}`,
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: { authorization: `Bearer ${cookies.get('auth-token')}` }
            }
        );

        yield put(fetchChatHistoryListSuccess(response.data.items));
        yield put(incrementPage());
    } catch (error) {
        yield put(fetchChatHistoryListFailure());
    }
}

export default function* chatHistoryListSaga() {
    yield takeLatest(fetchChatHistoryListRequest.type, ApiCall);
}
