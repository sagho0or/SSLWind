import { SendIdentityInterface } from "./sendIdentity.interface";

export const KYC_SEND_IDENTITY_SUCCESS = 'KYC_SEND_IDENTITY_SUCCESS';
export const KYC_SEND_IDENTITY_FAILURE = 'KYC_SEND_IDENTITY_FAILURE';
export const KYC_SEND_IDENTITY_LOADING = 'KYC_SEND_IDENTITY_LOADING';

export const kycSendIdentitySuccess = (response: any) => ({
    type: KYC_SEND_IDENTITY_SUCCESS,
    response
});
export const kycSendIdentityFailure = () => ({
    type: KYC_SEND_IDENTITY_FAILURE
});
export const kycSendIdentityLoading = (data: SendIdentityInterface) => ({
    type: KYC_SEND_IDENTITY_LOADING,
    data
});