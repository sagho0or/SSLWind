export const GET_ORDER_HISTORY_LOADING = 'GET_ORDER_HISTORY_LOADING';
export const GET_ORDER_HISTORY_SUCCESS = 'GET_ORDER_HISTORY_SUCCESS';
export const GET_ORDER_HISTORY_FAILURE = 'GET_ORDER_HISTORY_FAILURE';

export const getOrderHistoryLoading = (params: any) => ({
    type: GET_ORDER_HISTORY_LOADING,
    params
})
export const getOrderHistorySuccess = (response: any) => ({
    type: GET_ORDER_HISTORY_SUCCESS,
    response: response
})
export const getOrderHistoryFailure = () => ({
    type: GET_ORDER_HISTORY_FAILURE,
})