export const GET_AUTH_HISTORY_LOADING = 'GET_AUTH_HISTORY_LOADING';
export const GET_AUTH_HISTORY_SUCCESS = 'GET_AUTH_HISTORY_SUCCESS';
export const GET_AUTH_HISTORY_FAILURE = 'GET_AUTH_HISTORY_FAILURE';

export const getAuthHistoryLoading = (params: any) => ({
    type: GET_AUTH_HISTORY_LOADING,
    params
})
export const getAuthHistorySuccess = (response: any) => ({
    type: GET_AUTH_HISTORY_SUCCESS,
    response: response
})
export const getAuthHistoryFailure = () => ({
    type: GET_AUTH_HISTORY_FAILURE,
})