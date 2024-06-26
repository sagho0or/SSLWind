import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import { Cookies } from 'react-cookie';
import {
    change2FAFailure,
    change2FASuccess, CHANGE_2FA_LOADING
} from "@/store/security/change2FA/action";

function* ApiCall(action: any): Generator<any> {
    const cookies = new Cookies();
    const data = action.data
    try {
        const response: any = yield call(axiosInterceptorInstance.patch,
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/security/2fa/`,
            {...data},
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            });
        yield put(change2FASuccess(response));
    } catch (error: any) {
        errorHandling(error, change2FAFailure)
    }
}

export default function* change2FASaga() {
    yield takeLatest(CHANGE_2FA_LOADING, ApiCall);
}