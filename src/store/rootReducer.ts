import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from '@/store/auth/login/form/slice';
import getUserProfileReducer from '@/store/userProfile/slice';
import registerMobileReducer from '@/store/auth/register/registerMobile/reducer';
import LoginOtpReducer from '@/store/auth/login/otp/slice';
import registerOtpReducer from './auth/register/registerOtp/reducer';
import registerIdentityReducer from './auth/register/registerIdentity/reducer';
import registerPasswordReducer from "@/store/auth/register/registerPassword/reducer";
import resendOtpSmsReducer from "@/store/auth/otp/resendOtpSms/reducer";
import verifytwoFactorAuthenticationReducer
    from "@/store/security/verify/reducer";
import activeGAReducer
    from "@/store/security/activeGA/reducer";
import editPasswordReducer from "@/store/security/editPassword/reducer";
import getAuthHistoryReducer from "@/store/security/authHistory/reducer";
import change2FAReducer from "@/store/security/change2FA/reducer";
import getOrderHistoryReducer from "@/store/history/reducer";
import refreshTokenReducer from "@/store/auth/refreshToken/reducer";

const rootReducer = combineReducers({
    userProfile: getUserProfileReducer,

    // refreshToken: refreshTokenReducer,

    login: loginReducer,
    loginOtp: LoginOtpReducer,
    // resendOtpSms:resendOtpSmsReducer,

    // registerMobile: registerMobileReducer,
    // registerOtp: registerOtpReducer,
    // registerIdentity: registerIdentityReducer,
    // registerPassword: registerPasswordReducer,
    
    // activeGA: activeGAReducer,
    // change2FA: change2FAReducer,
    // verifyTwoFactorAuthentication: verifytwoFactorAuthenticationReducer,
    // editPassword: editPasswordReducer,
    // authHistory: getAuthHistoryReducer,

    // orderHistory: getOrderHistoryReducer,

});

export default rootReducer;


