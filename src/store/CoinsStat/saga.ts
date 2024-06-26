
import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from "@/store/_utils/errorHandling";
import {
    GET_COINSSTAT_LOADING,
    getCoinsStatSuccess
} from "@/store/CoinsStat/action";
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(): Generator<any> {
    try {
        const response: any = yield call(axiosInterceptorInstance.get,
            `${process.env.NEXT_PUBLIC_BASE_URL}watcher/price/coins/stat`,
            {
                timeout: Number(process.env.API_TIME_OUT),
            });
        yield put(getCoinsStatSuccess(response?.data?.message));
    } catch (error: any) {
        yield errorHandling(error, getCoinsStatSuccess);
    }
}

export default function* getCoinsStatSaga() {
    yield takeLatest(GET_COINSSTAT_LOADING, ApiCall);
}