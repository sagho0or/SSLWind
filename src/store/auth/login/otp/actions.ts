import { LoginOtpInterface } from '@/store/auth/login/otp/loginOtp.interface';
import { LoginOtpResponseInterface } from '@/store/auth/login/otp/loginOtpResponse.interface';

export const LOGIN_OTP_LOADING = 'LOGIN_OTP_LOADING';
export const LOGIN_OTP_SUCCESS = 'LOGIN_OTP_SUCCESS';
export const LOGIN_OTP_FAILURE = 'LOGIN_OTP_FAILURE';

export const loginOtpLoading = (data: LoginOtpInterface) => ({
  type: LOGIN_OTP_LOADING,
  data
});
export const loginOtpSuccess = (response: LoginOtpResponseInterface)=>({
  type: LOGIN_OTP_SUCCESS,
  response: response
});
export const loginOtpFailure = ()=>({
  type: LOGIN_OTP_FAILURE
})