import { takeLatest, put, call } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import { Cookies } from 'react-cookie';
import axiosInterceptorInstance from "@/store/axios";
import {
    CONFIRM_WITHDRAW_LOADING,
    confirmWithdrawFailure,
    confirmWithdrawSuccess
} from "@/store/withdraw/confirm/actions";

function* ApiCall(action: any): Generator<any> {
    const data = action.data;
    const cookies = new Cookies();
    try {
        const response: any = yield call(
            axiosInterceptorInstance.post,
            `${process.env.NEXT_PUBLIC_BASE_URL}withdraw/confirm/`,
            data,
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            },
        );
        yield put(confirmWithdrawSuccess(response));
    } catch (error: any) {
        yield errorHandling(error, confirmWithdrawFailure);
    }
}

export default function* withdrawConfirmSaga() {
    yield takeLatest(CONFIRM_WITHDRAW_LOADING, ApiCall);
}