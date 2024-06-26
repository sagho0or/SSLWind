import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import {
    ACTIVE_TOW_FACTOR_AUTHENTICATION_LOADING,
    activeTowFactorAuthenticationFailure,
    activeTowFactorAuthenticationSuccess
} from "@/store/security/active/action";
import { Cookies } from 'react-cookie';

function* ApiCall(action: any): Generator<any> {
    const cookies = new Cookies();
    try {
        const response: any = yield call(axiosInterceptorInstance.post,
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google/authenticator/active/`,
            {},
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            });
        yield put(activeTowFactorAuthenticationSuccess(response));
    } catch (error: any) {
        yield errorHandling(error, activeTowFactorAuthenticationFailure)
    }
}

export default function* activeTowFactorAuthenticationSaga() {
    yield takeLatest(ACTIVE_TOW_FACTOR_AUTHENTICATION_LOADING, ApiCall);
}