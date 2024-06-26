import {
    change2FAdataInterface
} from "@/store/security/change2FA/change2FA.interface";

export const CHANGE_2FA_LOADING = 'CHANGE_2FA_LOADING';
export const CHANGE_2FA_SUCCESS = 'CHANGE_2FA_SUCCESS';
export const CHANGE_2FA_FAILURE = 'CHANGE_2FA_FAILURE';

export const change2FALoading = (data: change2FAdataInterface)=>({
    type: CHANGE_2FA_LOADING,
    data
})
export const change2FASuccess = (response: any)=>({
    type: CHANGE_2FA_SUCCESS,
    response
})
export const change2FAFailure = ()=>({
    type: CHANGE_2FA_FAILURE
})
