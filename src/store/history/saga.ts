import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";
import {Cookies} from 'react-cookie';
import {OredrHistoryInterface} from "@/store/history/oredrHistory.interface";
import {
    GET_ORDER_HISTORY_LOADING,
    getOrderHistoryFailure,
    getOrderHistorySuccess
} from "@/store/history/action";

function* ApiCall(action: any): Generator<any> {
    const cookies = new Cookies();
    const params: OredrHistoryInterface = action.params
    try {
        const response: any = yield call(axiosInterceptorInstance.get,
            `${process.env.NEXT_PUBLIC_BASE_URL}rover/history/?limit=${params.limit}&offset=${params.offset}&from_date=${params.from_date||''}&to_date=${params.to_date||''}`,
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            });
        yield put(getOrderHistorySuccess(response?.data?.message));
    } catch (error: any) {
        yield errorHandling(error, getOrderHistoryFailure);
    }
}

export default function* getOrderHistorySaga() {
    yield takeLatest(GET_ORDER_HISTORY_LOADING, ApiCall);
}