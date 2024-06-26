import { takeLatest, put, call } from 'redux-saga/effects';
import {
    KYC_SEND_MOBILE_LOADING,
    kycSendMobileSuccess,
    kycSendMobileFailure,
} from './actions';
import { SagaInputActionInterface } from '@/store/_interfaces/sagaInputAction.interface';
import errorHandling from '@/store/_utils/errorHandling';
import { Cookies } from 'react-cookie';
import axiosInterceptorInstance from "@/store/axios";

function* ApiCall(action: SagaInputActionInterface): Generator<any> {
    const dataForm = action.data;
    const cookies = new Cookies();
    try {
        const response: any = yield call(
            axiosInterceptorInstance.post,
            `${process.env.NEXT_PUBLIC_BASE_URL}auth/profile/signup/`,
            dataForm,
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            },
        );

        yield put(kycSendMobileSuccess(response?.data?.message));
    } catch (error: any) {
        yield errorHandling(error, kycSendMobileFailure);
    }
}

export default function* kycSendMobileSaga() {
    yield takeLatest(KYC_SEND_MOBILE_LOADING, ApiCall);
}