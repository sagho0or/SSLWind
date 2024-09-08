
import { call, put, takeLatest } from 'redux-saga/effects';
import {Cookies} from 'react-cookie';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";
import { getUserProfileLoading, getUserProfileFailure, getUserProfileSuccess } from './slice';


function* ApiCall(action: any): Generator<any> {

    const cookies = new Cookies();
    try {
        const response: any = yield call(axiosInterceptorInstance.get,
            `${process.env.NEXT_PUBLIC_BASE_URL}user/account/userprofile`,
            {
                timeout: Number(process.env.API_TIME_OUT)
            });
        yield put((getUserProfileSuccess(response.data.data)));
    }catch (error: any) {
        yield errorHandling(error, getUserProfileFailure);
    }
}

export default function* getUserProfileSaga() {
    yield takeLatest(getUserProfileLoading.type, ApiCall);
}
