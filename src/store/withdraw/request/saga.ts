import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";
import {
    POST_WITHDRAW_REQUEST_LOADING,
    withdrawRequestError,
    withdrawRequestSuccess
} from "@/store/withdraw/request/action";
import {Cookies} from "react-cookie";

function* ApiCall(action: any): Generator<any> {
    const data: any = action.data
    const cookies = new Cookies();
    try {
        const response: any = yield call(axiosInterceptorInstance.post,
            `${process.env.NEXT_PUBLIC_BASE_URL}withdraw/request/${data.symbol}/?provider=${data.provider}`,
            {address: data.address, amount: data.amount},
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {Authorization: 'Bearer ' + `${cookies.get('auth-token')}`}
            });
        yield put(withdrawRequestSuccess(response));
    } catch (error: any) {
        yield errorHandling(error, withdrawRequestError);
    }
}

export default function* withdrawRequestSaga() {
    yield takeLatest(POST_WITHDRAW_REQUEST_LOADING, ApiCall);
}