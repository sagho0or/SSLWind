export const REFRESH_TOKEN_LOADING = 'REFRESH_TOKEN_LOADING';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE';

export const refreshTokenLoading = ()=>({
  type: REFRESH_TOKEN_LOADING,
})
export const refreshTokenSuccess = ()=>({
  type: REFRESH_TOKEN_SUCCESS,
})
export const refreshTokenFailure = ()=>({
  type: REFRESH_TOKEN_FAILURE
})
