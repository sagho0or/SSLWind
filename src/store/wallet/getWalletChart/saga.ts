
import { call, put, takeLatest } from 'redux-saga/effects';
import {Cookies} from 'react-cookie';
import errorHandling from "@/store/_utils/errorHandling";
import axiosInterceptorInstance from "@/store/axios";
import {
    GET_WALLET_CHART_DATA_LOADING,
    getWalletChartDataFailure,
    getWalletChartDataSuccess
} from "@/store/wallet/getWalletChart/action";


function* ApiCall(action: any): Generator<any> {
    const days = action.filterDay;
    const cookies = new Cookies();
    try {
        const response: any = yield call(axiosInterceptorInstance.get,
            `${process.env.NEXT_PUBLIC_BASE_URL}/wallet/pnl/list/?i=${days}`,
            {
                timeout: Number(process.env.API_TIME_OUT),
                headers: {authorization: `Bearer ${cookies.get('auth-token')}`}
            });
        yield put((getWalletChartDataSuccess(response.data.message)));
    }catch (error: any) {
        yield errorHandling(error, getWalletChartDataFailure);
    }
}

export default function* getWalletChartDataSaga() {
    yield takeLatest(GET_WALLET_CHART_DATA_LOADING, ApiCall);
}