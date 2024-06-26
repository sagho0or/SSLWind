import {WalletChartDataResponseInterface} from "@/store/wallet/getWalletChart/interface";

export const GET_WALLET_CHART_DATA_SUCCESS = 'GET_WALLET_CHART_DATA_SUCCESS';
export const GET_WALLET_CHART_DATA_LOADING = 'GET_WALLET_CHART_DATA_LOADING';
export const GET_WALLET_CHART_DATA_FAILURE = 'GET_WALLET_CHART_DATA_FAILURE';

export const getWalletChartDataSuccess = (response: WalletChartDataResponseInterface[]) => ({
    type: GET_WALLET_CHART_DATA_SUCCESS,
    response
})
export const getWalletChartDataLoading = (filterDay: number) => ({
    type: GET_WALLET_CHART_DATA_LOADING,
    filterDay
})
export const getWalletChartDataFailure = (error: any) => ({
    type: GET_WALLET_CHART_DATA_FAILURE,
    error
})