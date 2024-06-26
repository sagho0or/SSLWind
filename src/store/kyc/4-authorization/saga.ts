import {takeLatest, put, call} from 'redux-saga/effects';
import {
    KYC_SEND_UID_LOADING,
    kycSendUidSuccess,
    kycSendUidFailure,
} from './actions';
import errorHandling from '@/store/_utils/errorHandling';
import {Cookies} from 'react-cookie';
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(): Generator<any> {
    const cookies = new Cookies();
    try {
        const response: any = yield call(
            axiosInterceptorInstance.get,
            `${process.env.NEXT_PUBLIC_BASE_URL}auth/kyc/uid/authorization/`,
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            },
        );

        yield put(kycSendUidSuccess(response?.data?.message));
    } catch (error: any) {
        yield errorHandling(error, kycSendUidFailure);
    }
}

export default function* kycSendUidSaga() {
    yield takeLatest(KYC_SEND_UID_LOADING, ApiCall);
}