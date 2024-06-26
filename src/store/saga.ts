import {all} from 'redux-saga/effects';
import loginSaga from '@/store/auth/login/form/saga';
import getCoinsSaga from '@/store/comparison/getCoins/saga';
import getExchangesSaga from '@/store/comparison/getExchanges/saga';
import registerMobileSaga from '@/store/auth/register/registerMobile/saga';
import postOrderSaga from '@/store/comparison/postOrder/saga';
import loginOtpSaga from '@/store/auth/login/otp/saga';
import registerIdentitySaga from "@/store/auth/register/registerIdentity/saga";
import registerPasswordSaga from '@/store/auth/register/registerPassword/saga';
import kycSendMobileSaga from './kyc/1-sendMobile/saga';
import kycSendOtpSaga from './kyc/1-sendOtp/saga';
import registerOtpSaga from './auth/register/registerOtp/saga';
import getWalletSaga from '@/store/wallet/wallet/saga';
import postChargeSaga from '@/store/charge/saga';
import getNetworksSaga from "@/store/deposit/network/saga";
import getCardsSaga from "@/store/bankCards/getBankCards/saga";
import getCoinsStatSaga from "@/store/CoinsStat/saga";
import getDepositHistorySaga from "@/store/deposit/history/saga";
import getDepositAddressSaga from "@/store/deposit/address/saga";
import postBankCardSaga from "@/store/bankCards/postBankCard/saga";
import resendOtpSmsSaga from "@/store/auth/otp/resendOtpSms/saga";
import getUserProfileSaga from "@/store/userProfile/saga";
import activeGASaga from "@/store/security/activeGA/saga";
import verifyTowFactorAuthenticationSaga from "@/store/security/verify/saga";
import editPasswordSaga from "@/store/security/editPassword/saga";
import kycSendIdentitySaga from "@/store/kyc/2-sendIdentity/saga";
import getAuthHistorySaga from "@/store/security/authHistory/saga";
import withdrawRequestSaga from "@/store/withdraw/request/saga";
import change2FASaga from "@/store/security/change2FA/saga";
import kycSendUidSaga from "@/store/kyc/4-authorization/saga";
import withdrawConfirmSaga from "@/store/withdraw/confirm/saga";
import getReferralCodeSaga from "@/store/referral/getReferralCode/saga";
import getWalletChartDataSaga from "@/store/wallet/getWalletChart/saga";
import getWithdrawHistorySaga from "@/store/withdraw/history/saga";
import getOrderHistorySaga from "@/store/history/saga";
import refreshTokenSaga from "@/store/auth/refreshToken/saga";

function* rootSaga() {
    yield all([
        getUserProfileSaga(),

        refreshTokenSaga(),

        loginSaga(),
        loginOtpSaga(),
        resendOtpSmsSaga(),

        registerMobileSaga(),
        registerOtpSaga(),
        registerIdentitySaga(),
        registerPasswordSaga(),

        getCoinsSaga(),
        getExchangesSaga(),
        postOrderSaga(),

        kycSendMobileSaga(),
        kycSendOtpSaga(),
        kycSendIdentitySaga(),
        kycSendUidSaga(),

        postChargeSaga(),

        getWalletSaga(),
        getWalletChartDataSaga(),

        getNetworksSaga(),
        getDepositHistorySaga(),
        getDepositAddressSaga(),

        withdrawRequestSaga(),
        withdrawConfirmSaga(),
        getWithdrawHistorySaga(),


        getCardsSaga(),
        postBankCardSaga(),

        getCoinsStatSaga(),

        activeGASaga(),
        change2FASaga(),
        verifyTowFactorAuthenticationSaga(),
        editPasswordSaga(),
        getAuthHistorySaga(),

        getOrderHistorySaga(),

        getReferralCodeSaga()
    ]);
}

export default rootSaga;