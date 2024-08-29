import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from '@/store/auth/login/form/slice';
import getUserProfileReducer from '@/store/userProfile/slice';
import registerMobileReducer from '@/store/auth/register/registerMobile/reducer';
import LoginOtpReducer from '@/store/auth/login/otp/slice';
import ChatReducer from '@/store/chat/new/slice';
import chathistoryReducer from '@/store/chat/history/slice';
import userManagementReducer from '@/store/userManagement/new/slice';
import updateUserReducer from '@/store/userManagement/update/slice';
import userListReducer from '@/store/userManagement/list/slice';
import chatHistoryListReducer from '@/store/chat/history/list/slice';
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
import refreshTokenReducer from "@/store/auth/refreshToken/reducer";

const rootReducer = combineReducers({
    userProfile: getUserProfileReducer,

    // refreshToken: refreshTokenReducer,

    login: loginReducer,
    loginOtp: LoginOtpReducer,
    chat: ChatReducer,
    chathistory: chathistoryReducer,
    chatHistoryList: chatHistoryListReducer,
    userManagement: userManagementReducer,
    updateUser: updateUserReducer,
    userList: userListReducer,
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


