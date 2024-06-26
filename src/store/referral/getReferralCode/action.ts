import {ReferralCodeResponseInterface} from "@/store/referral/getReferralCode/interface";

export const GET_REFERRAL_CODE_SUCCESS = 'GET_REFERRAL_CODE_SUCCESS';
export const GET_REFERRAL_CODE_LOADING = 'GET_REFERRAL_CODE_LOADING';
export const GET_REFERRAL_CODE_FAILURE = 'GET_REFERRAL_CODE_FAILURE';

export const getReferralCodeSuccess = (response: ReferralCodeResponseInterface) => ({
    type: GET_REFERRAL_CODE_SUCCESS,
    response
})
export const getReferralCodeLoading = () => ({
    type: GET_REFERRAL_CODE_LOADING
})
export const getReferralCodeFailure = (error: any) => ({
    type: GET_REFERRAL_CODE_FAILURE,
    error
})