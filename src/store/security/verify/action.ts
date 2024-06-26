
export const VERIFY_TOW_FACTOR_AUTHENTICATION_LOADING = 'VERIFY_TOW_FACTOR_AUTHENTICATION_LOADING';
export const VERIFY_TOW_FACTOR_AUTHENTICATION_SUCCESS = 'VERIFY_TOW_FACTOR_AUTHENTICATION_SUCCESS';
export const VERIFY_TOW_FACTOR_AUTHENTICATION_FAILURE = 'VERIFY_TOW_FACTOR_AUTHENTICATION_FAILURE';

export const verifyTowFactorAuthenticationLoading = (data: any)=>({
    type: VERIFY_TOW_FACTOR_AUTHENTICATION_LOADING,
    data
})
export const verifyTowFactorAuthenticationSuccess = (response: any)=>({
    type: VERIFY_TOW_FACTOR_AUTHENTICATION_SUCCESS,
    response
})
export const verifyTowFactorAuthenticationFailure = ()=>({
    type: VERIFY_TOW_FACTOR_AUTHENTICATION_FAILURE
})
