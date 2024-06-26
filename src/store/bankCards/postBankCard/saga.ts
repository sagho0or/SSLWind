import { takeLatest, put, call } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import { Cookies } from 'react-cookie';
import {
    POST_BANKCARD_LOADING,
    postBankCardFailure,
    postBankCardSuccess
} from "@/store/bankCards/postBankCard/action";
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(action: any): Generator<any> {
    const cardData = action.data;
    const cookies = new Cookies();
    try {
        yield call(
            axiosInterceptorInstance.post,
            `${process.env.NEXT_PUBLIC_BASE_URL}user/account/card/add`,
            cardData,
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            },
        );
        yield put(postBankCardSuccess());
    } catch (error: any) {
        yield errorHandling(error, postBankCardFailure);
    }
}

export default function* postBankCardSaga() {
    yield takeLatest(POST_BANKCARD_LOADING, ApiCall);
}