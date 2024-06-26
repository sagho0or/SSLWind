import { registerResendOtpRequestInterface } from "./resendOtpSms.interface";


export const RESEND_OTP_SMS_LOADING = 'RESEND_OTP_SMS_LOADING';
export const RESEND_OTP_SMS_SUCCESS = 'RESEND_OTP_SMS_SUCCESS';
export const RESEND_OTP_SMS_FAILURE = 'RESEND_OTP_SMS_FAILURE';

export const resendOtpSmsLoading = (data: registerResendOtpRequestInterface)=>({
  type: RESEND_OTP_SMS_LOADING,
  data
})
export const resendOtpSmsSuccess = ()=>({
  type: RESEND_OTP_SMS_SUCCESS,
})
export const resendOtpSmsFailure = ()=>({
  type: RESEND_OTP_SMS_FAILURE
})
