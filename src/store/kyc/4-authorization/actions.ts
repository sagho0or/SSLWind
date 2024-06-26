

export const KYC_SEND_UID_SUCCESS = 'KYC_SEND_UID_SUCCESS';
export const KYC_SEND_UID_FAILURE = 'KYC_SEND_UID_FAILURE';
export const KYC_SEND_UID_LOADING = 'KYC_SEND_UID_LOADING';

export const kycSendUidSuccess = (response: any) => ({
    type: KYC_SEND_UID_SUCCESS,
    response
});
export const kycSendUidFailure = () => ({
    type: KYC_SEND_UID_FAILURE
});
export const kycSendUidLoading = () => ({
    type: KYC_SEND_UID_LOADING,
});