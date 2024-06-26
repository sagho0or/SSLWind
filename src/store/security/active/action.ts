export const ACTIVE_TOW_FACTOR_AUTHENTICATION_LOADING = 'ACTIVE_TOW_FACTOR_AUTHENTICATION_LOADING';
export const ACTIVE_TOW_FACTOR_AUTHENTICATION_SUCCESS = 'ACTIVE_TOW_FACTOR_AUTHENTICATION_SUCCESS';
export const ACTIVE_TOW_FACTOR_AUTHENTICATION_FAILURE = 'ACTIVE_TOW_FACTOR_AUTHENTICATION_FAILURE';

export const activeTowFactorAuthenticationLoading = ()=>({
    type: ACTIVE_TOW_FACTOR_AUTHENTICATION_LOADING,
})
export const activeTowFactorAuthenticationSuccess = (response: any)=>({
    type: ACTIVE_TOW_FACTOR_AUTHENTICATION_SUCCESS,
    response
})
export const activeTowFactorAuthenticationFailure = ()=>({
    type: ACTIVE_TOW_FACTOR_AUTHENTICATION_FAILURE
})
