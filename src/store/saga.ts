import {all, fork} from 'redux-saga/effects';
import registerMobileSaga from '@/store/auth/register/registerMobile/saga';
import loginOtpSaga from '@/store/auth/login/otp/saga';
import registerIdentitySaga from "@/store/auth/register/registerIdentity/saga";
import registerPasswordSaga from '@/store/auth/register/registerPassword/saga';
import registerOtpSaga from './auth/register/registerOtp/saga';
import resendOtpSmsSaga from "@/store/auth/otp/resendOtpSms/saga";
import getUserProfileSaga from "@/store/userProfile/saga";
import activeGASaga from "@/store/security/activeGA/saga";
import verifyTowFactorAuthenticationSaga from "@/store/security/verify/saga";
import editPasswordSaga from "@/store/security/editPassword/saga";
import getAuthHistorySaga from "@/store/security/authHistory/saga";
import change2FASaga from "@/store/security/change2FA/saga";
import getOrderHistorySaga from "@/store/history/saga";
import refreshTokenSaga from "@/store/auth/refreshToken/saga";
import loginSaga from './auth/login/form/saga';

function* rootSaga() {
    yield all([
        getUserProfileSaga(),

        // refreshTokenSaga(),

        fork(loginSaga),
        loginOtpSaga(),
        // resendOtpSmsSaga(),

        // registerMobileSaga(),
        // registerOtpSaga(),
        // registerIdentitySaga(),
        // registerPasswordSaga(),

        // activeGASaga(),
        // change2FASaga(),
        // verifyTowFactorAuthenticationSaga(),
        // editPasswordSaga(),
        // getAuthHistorySaga(),

        // getOrderHistorySaga(),

    ]);
}

export default rootSaga;