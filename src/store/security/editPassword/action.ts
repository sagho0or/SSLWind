export const EDIT_PASSWORD_LOADING = 'EDIT_PASSWORD_LOADING';
export const EDIT_PASSWORD_SUCCESS = 'EDIT_PASSWORD_SUCCESS';
export const EDIT_PASSWORD_FAILURE = 'EDIT_PASSWORD_FAILURE';

export const editPasswordLoading = (data: any)=>({
    type: EDIT_PASSWORD_LOADING,
    data
})
export const editPasswordSuccess = (response: any)=>({
    type: EDIT_PASSWORD_SUCCESS,
    response
})
export const editPasswordFailure = ()=>({
    type: EDIT_PASSWORD_FAILURE
})
