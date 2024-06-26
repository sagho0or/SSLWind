
import { call, put, takeLatest } from 'redux-saga/effects';
import {Cookies} from 'react-cookie';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";
import {
    GET_REFERRAL_CODE_LOADING,
    getReferralCodeFailure,
    getReferralCodeSuccess
} from "@/store/referral/getReferralCode/action";


function* ApiCall(): Generator<any> {

    const cookies = new Cookies();
    try {
        const response: any = yield call(axiosInterceptorInstance.get,
            `${process.env.NEXT_PUBLIC_BASE_URL}user/account/referral`,
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            });
        yield put((getReferralCodeSuccess(response.data.message)));
    }catch (error: any) {
        yield errorHandling(error, getReferralCodeFailure);
    }
}

export default function* getReferralCodeSaga() {
    yield takeLatest(GET_REFERRAL_CODE_LOADING, ApiCall);
}