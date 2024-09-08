import { call, put, takeLatest } from 'redux-saga/effects';
import errorHandling from '@/store/_utils/errorHandling';
import axiosInterceptorInstance from "@/store/axios";
import { Cookies } from 'react-cookie';
import {
    EDIT_PASSWORD_LOADING,
    editPasswordFailure,
    editPasswordSuccess
} from "@/store/security/editPassword/action";

function* ApiCall(action: any): Generator<any> {
    const dataForm = action.data;
    const cookies = new Cookies();
    try {
        const response: any = yield call(axiosInterceptorInstance.post,
            `${process.env.NEXT_PUBLIC_BASE_URL}auth/password/change/`,
            {...dataForm},
            {
                timeout: Number(process.env.API_TIME_OUT)
            });
        yield put(editPasswordSuccess(response));
    } catch (error: any) {
        yield errorHandling(error, editPasswordFailure)
    }
}

export default function* editPasswordSaga() {
    yield takeLatest(EDIT_PASSWORD_LOADING, ApiCall);
}