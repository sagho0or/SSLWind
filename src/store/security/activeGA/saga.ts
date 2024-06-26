import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import {
    ACTIVE_GA_LOADING,
    activeGAFailure,
    activeGASuccess
} from "@/store/security/activeGA/action";
import { Cookies } from 'react-cookie';

function* ApiCall(): Generator<any> {
    const cookies = new Cookies();
    try {
        const response: any = yield call(axiosInterceptorInstance.post,
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google/authenticator/active/`,
            {},
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            });
        yield put(activeGASuccess(response));
    } catch (error: any) {
        errorHandling(error, activeGAFailure)
    }
}

export default function* activeGASaga() {
    yield takeLatest(ACTIVE_GA_LOADING, ApiCall);
}