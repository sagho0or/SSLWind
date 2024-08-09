import { UserRole } from "@/store/userProfile/interface";

export interface registerResendOtpRequestInterface {
  password: string;
  email: string;
  //TODO
  //recaptcha_response: string;
}
export interface OtpResponseInterface {
  
  role: UserRole,
  lastLogin: Date;
  token: string;
  email: string;
  userId: number;
  refreshToken : string;
}
