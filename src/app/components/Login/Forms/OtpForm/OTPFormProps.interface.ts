export interface OTPFormProps {
  email: string;
  password: string;
  loginResponse: LoginResponse;
  backFunc: ()=>void
}
export interface LoginResponse {
  otpExpiresIn: number,
  trackingId: string,
  otpRetryCount: number
}