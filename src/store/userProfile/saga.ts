
import { call, put, takeLatest } from 'redux-saga/effects';
import {Cookies} from 'react-cookie';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";
import {
    GET_USERPROFILE_LOADING,
    getUserProfileFailure,
    getUserProfileSuccess
} from "@/store/userProfile/action";


function* ApiCall(action: any): Generator<any> {

    const cookies = new Cookies();
    try {
        const response: any = yield call(axiosInterceptorInstance.get,
            `${process.env.NEXT_PUBLIC_BASE_URL}user/account/card/userprofile`,
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            });
        yield put((getUserProfileSuccess(response.data.message)));
    }catch (error: any) {
        yield errorHandling(error, getUserProfileFailure);
    }
}

export default function* getUserProfileSaga() {
    yield takeLatest(GET_USERPROFILE_LOADING, ApiCall);
}