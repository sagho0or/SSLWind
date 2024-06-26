import {call, put} from 'redux-saga/effects';
import toast from 'react-hot-toast';
import errorConverterToText from '@/app/utils/errorConverterToText';

export default function* errorHandling(error: any, failureAction?: any): any {
    if (error.response) {
        yield toast.error(errorConverterToText(error.response.data.number, error.response.data.message));
        if (failureAction) {
            yield put(failureAction());
        }
    } else {
        if (failureAction) {
            yield put(failureAction());
        }
    }
}