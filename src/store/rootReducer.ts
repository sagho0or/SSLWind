import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from '@/store/auth/login/form/slice';
import getUserProfileReducer from '@/store/userProfile/slice';
import LoginOtpReducer from '@/store/auth/login/otp/slice';
import ChatReducer from '@/store/chat/new/slice';
import chathistoryReducer from '@/store/chat/history/slice';
import userManagementReducer from '@/store/userManagement/new/slice';
import updateUserReducer from '@/store/userManagement/update/slice';
import alertListReducer from '@/store/alerts/slice';
import alertReducer from '@/store/alerts/details/slice';
import notificationsReducer from '@/store/alerts/notificationCount/slice';
import userListReducer from '@/store/userManagement/list/slice';
import chatHistoryListReducer from '@/store/chat/history/list/slice';

const rootReducer = combineReducers({
    userProfile: getUserProfileReducer,
    login: loginReducer,
    loginOtp: LoginOtpReducer,
    chat: ChatReducer,
    chathistory: chathistoryReducer,
    chatHistoryList: chatHistoryListReducer,
    userManagement: userManagementReducer,
    updateUser: updateUserReducer,
    userList: userListReducer,
    alertList: alertListReducer,
    alert: alertReducer,
    notifications: notificationsReducer,

});

export default rootReducer;


