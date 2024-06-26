import { registerOtpRequestInterface, registerOtpResponseInterface } from "./registerOtp.interface";


export const REGISTER_OTP_LOADING = 'REGISTER_OTP_LOADING';
export const REGISTER_OTP_SUCCESS = 'REGISTER_OTP_SUCCESS';
export const REGISTER_OTP_FAILURE = 'REGISTER_OTP_FAILURE';

export const registerOtpLoading = (data: registerOtpRequestInterface)=>({
  type: REGISTER_OTP_LOADING,
  data
})
export const registerOtpSuccess = (successRes: registerOtpResponseInterface)=>({
  type: REGISTER_OTP_SUCCESS,
  successRes: successRes
})
export const registerOtpFailure = ()=>({
  type: REGISTER_OTP_FAILURE
})
