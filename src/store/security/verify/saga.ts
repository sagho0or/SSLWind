import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import { Cookies } from 'react-cookie';
import {
    VERIFY_TOW_FACTOR_AUTHENTICATION_LOADING,
    verifyTowFactorAuthenticationFailure,
    verifyTowFactorAuthenticationSuccess
} from "@/store/security/verify/action";

function* ApiCall(action: any): Generator<any> {
    const cookies = new Cookies();
    try {
        const response: any = yield call(axiosInterceptorInstance.post,
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google/authenticator/verify/`,
            {code: action.data},
            {
                timeout: Number(process.env.API_TIME_OUT)
            });
        yield put(verifyTowFactorAuthenticationSuccess(response));
    } catch (error: any) {
        yield errorHandling(error, verifyTowFactorAuthenticationFailure)
    }
}

export default function* verifyTowFactorAuthenticationSaga() {
    yield takeLatest(VERIFY_TOW_FACTOR_AUTHENTICATION_LOADING, ApiCall);
}