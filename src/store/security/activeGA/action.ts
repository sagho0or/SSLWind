export const ACTIVE_GA_LOADING = 'ACTIVE_GA_LOADING';
export const ACTIVE_GA_SUCCESS = 'ACTIVE_GA_SUCCESS';
export const ACTIVE_GA_FAILURE = 'ACTIVE_GA_FAILURE';

export const activeGALoading = ()=>({
    type: ACTIVE_GA_LOADING,
})
export const activeGASuccess = (response: any)=>({
    type: ACTIVE_GA_SUCCESS,
    response
})
export const activeGAFailure = ()=>({
    type: ACTIVE_GA_FAILURE
})
