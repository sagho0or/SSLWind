import { SendOtpInterface } from "./sendOtp.interface";

export const KYC_SEND_OTP_SUCCESS = 'KYC_SEND_OTP_SUCCESS';
export const KYC_SEND_OTP_FAILURE = 'KYC_SEND_OTP_FAILURE';
export const KYC_SEND_OTP_LOADING = 'KYC_SEND_OTP_LOADING';

export const kycSendOtpSuccess = (response: any) => ({
    type: KYC_SEND_OTP_SUCCESS,
    response
});
export const kycSendOtpFailure = () => ({
    type: KYC_SEND_OTP_FAILURE
});
export const kycSendOtpLoading = (data: SendOtpInterface) => ({
    type: KYC_SEND_OTP_LOADING,
    data
});