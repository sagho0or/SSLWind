import {call, put} from 'redux-saga/effects';
import toast from 'react-hot-toast';

export default function* errorHandling(error: any, failureAction?: any): any {
    if (error.response) {
        yield toast.error(error.response.data.error);
        if (failureAction) {
            yield put(failureAction());
        }
    } else {
        if (failureAction) {
            yield put(failureAction());
        }
    }
}