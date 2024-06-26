
import { call, put, takeLatest } from 'redux-saga/effects';
import {Cookies} from 'react-cookie';
import errorHandling from "@/store/_utils/errorHandling";
import {
    GET_ADDRESS_LOADING,
    getAddressFailure,
    getAddressSuccess
} from "@/store/deposit/address/action";
import {AddressParamInterface} from "@/store/deposit/address/address.interface";
import axiosInterceptorInstance from "@/store/axios";


function* ApiCall(action: any): Generator<any> {

    const cookies = new Cookies();
    const params: AddressParamInterface = action.data;
    try {
        const response: any = yield call(axiosInterceptorInstance.get,
            `${process.env.NEXT_PUBLIC_BASE_URL}address/address/${params.symbol}/`,
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            });
        yield put((getAddressSuccess(response.data.message)));
    }catch (error: any) {
        yield errorHandling(error, getAddressFailure);
    }
}

export default function* getDepositAddressSaga() {
    yield takeLatest(GET_ADDRESS_LOADING, ApiCall);
}