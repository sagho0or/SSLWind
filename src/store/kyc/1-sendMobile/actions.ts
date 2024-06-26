import { SendMobileInterface } from "./sendMobile.interface";

export const KYC_SEND_MOBILE_SUCCESS = 'KYC_SEND_MOBILE_SUCCESS';
export const KYC_SEND_MOBILE_FAILURE = 'KYC_SEND_MOBILE_FAILURE';
export const KYC_SEND_MOBILE_LOADING = 'KYC_SEND_MOBILE_LOADING';

export const kycSendMobileSuccess = (response: any) => ({
    type: KYC_SEND_MOBILE_SUCCESS,
    response
});
export const kycSendMobileFailure = () => ({
    type: KYC_SEND_MOBILE_FAILURE
});
export const kycSendMobileLoading = (data: SendMobileInterface) => ({
    type: KYC_SEND_MOBILE_LOADING,
    data
});