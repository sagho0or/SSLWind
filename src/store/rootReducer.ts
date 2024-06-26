import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from '@/store/auth/login/form/reducer';
import getCoinsReducer from '@/store/comparison/getCoins/reducer'
import getExchangesReducer from '@/store/comparison/getExchanges/reducer';
import registerMobileReducer from '@/store/auth/register/registerMobile/reducer';
import orderReducer from '@/store/comparison/postOrder/reducer';
import LoginOtpReducer from '@/store/auth/login/otp/reducer';
import kycSendMobileReducer from './kyc/1-sendMobile/reducer';
import kycSendOtpReducer from './kyc/1-sendOtp/reducer';
import kycSendIdentityReducer from "@/store/kyc/2-sendIdentity/reducer";
import registerOtpReducer from './auth/register/registerOtp/reducer';
import registerIdentityReducer from './auth/register/registerIdentity/reducer';
import registerPasswordReducer from "@/store/auth/register/registerPassword/reducer";
import getWalletReducer from '@/store/wallet/wallet/reducer';
import postChargeReducer from '@/store/charge/reducer';
import getNetworksReducer from "@/store/deposit/network/reducer";
import getCardsReducer from "@/store/bankCards/getBankCards/reducer";
import getCoinsStatReducer from "@/store/CoinsStat/reducer";
import getDepositHistoryReducer from "@/store/deposit/history/reducer";
import getDepositAddressReducer from "@/store/deposit/address/reducer";
import postBankCardReducer from "@/store/bankCards/postBankCard/reducer";
import resendOtpSmsReducer from "@/store/auth/otp/resendOtpSms/reducer";
import getUserProfileReducer from "@/store/userProfile/reducer";
import verifytwoFactorAuthenticationReducer
    from "@/store/security/verify/reducer";
import activeGAReducer
    from "@/store/security/activeGA/reducer";
import editPasswordReducer from "@/store/security/editPassword/reducer";
import getAuthHistoryReducer from "@/store/security/authHistory/reducer";
import withdrawRequestReducer from "@/store/withdraw/request/reducer";
import change2FAReducer from "@/store/security/change2FA/reducer";
import kycSendUidReducer from "@/store/kyc/4-authorization/reducer";
import confirmWithdrawReducer from "@/store/withdraw/confirm/reducer";
import getReferralCodeReducer from "@/store/referral/getReferralCode/reducer";
import getWalletChartDataReducer from "@/store/wallet/getWalletChart/reducer";
import getWithdrawtHistoryReducer from "@/store/withdraw/history/reducer";
import getOrderHistoryReducer from "@/store/history/reducer";
import refreshTokenReducer from "@/store/auth/refreshToken/reducer";

const rootReducer = combineReducers({
    userProfile: getUserProfileReducer,

    refreshToken: refreshTokenReducer,

    login: loginReducer,
    loginOtp: LoginOtpReducer,
    resendOtpSms:resendOtpSmsReducer,

    registerMobile: registerMobileReducer,
    registerOtp: registerOtpReducer,
    registerIdentity: registerIdentityReducer,
    registerPassword: registerPasswordReducer,

    coins: getCoinsReducer,
    exchanges: getExchangesReducer,
    order: orderReducer,

    kycSendMobile: kycSendMobileReducer,
    kycSendOtp:kycSendOtpReducer,
    kycSendIdentity: kycSendIdentityReducer,
    kycSendUid: kycSendUidReducer,

    wallet: getWalletReducer,
    walletChart:getWalletChartDataReducer,

    postCharge: postChargeReducer,

    networks: getNetworksReducer,
    depositHistory: getDepositHistoryReducer,
    depositAddress: getDepositAddressReducer,

    withdrawRequest: withdrawRequestReducer,
    withdrawConfirm: confirmWithdrawReducer,
    withdrawHistory: getWithdrawtHistoryReducer,

    getBankCards: getCardsReducer,
    postBankCard: postBankCardReducer,

    coinsStat: getCoinsStatReducer,

    activeGA: activeGAReducer,
    change2FA: change2FAReducer,
    verifyTwoFactorAuthentication: verifytwoFactorAuthenticationReducer,
    editPassword: editPasswordReducer,
    authHistory: getAuthHistoryReducer,

    orderHistory: getOrderHistoryReducer,

    referralCode: getReferralCodeReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
