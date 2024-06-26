
import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";
import {
    GET_AUTH_HISTORY_LOADING,
    getAuthHistoryFailure,
    getAuthHistorySuccess
} from "@/store/security/authHistory/action";
import {Cookies} from 'react-cookie';
import {
    AuthHistoryParams
} from "@/store/security/authHistory/authHistory.interface";

function* ApiCall(action: any): Generator<any> {
    const cookies = new Cookies();
    const params: AuthHistoryParams = action.params
    try {
        const response: any = yield call(axiosInterceptorInstance.get,
            `${process.env.NEXT_PUBLIC_BASE_URL}auth/history/?offset=${params.offset}&limit=${params.limit}`,
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            });
        yield put(getAuthHistorySuccess(response?.data?.message));
    } catch (error: any) {
        yield errorHandling(error, getAuthHistoryFailure);
    }
}

export default function* getAuthHistorySaga() {
    yield takeLatest(GET_AUTH_HISTORY_LOADING, ApiCall);
}