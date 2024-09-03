import {all, fork} from 'redux-saga/effects';
import loginOtpSaga from '@/store/auth/login/otp/saga';
import getUserProfileSaga from "@/store/userProfile/saga";
import loginSaga from './auth/login/form/saga';
import chatSaga from './chat/new/saga';
import chatHisotrySaga from './chat/history/saga';
import userManagementSaga from './userManagement/new/saga';
import updateUserSaga from './userManagement/update/saga';
import UserListSaga from './userManagement/list/saga';
import chatHistoryListSaga from './chat/history/list/saga';
import alertListSaga from './alerts/saga';
import alertSaga from './alerts/details/saga';
import notificationSaga from './alerts/notificationCount/saga';

function* rootSaga() {
    yield all([
        getUserProfileSaga(),
        fork(loginSaga),
        loginOtpSaga(),
        chatSaga(),
        chatHisotrySaga(),
        chatHistoryListSaga(),
        userManagementSaga(),
        updateUserSaga(),
        UserListSaga(),
        alertListSaga(),
        alertSaga(),
        notificationSaga(),

    ]);
}

export default rootSaga;