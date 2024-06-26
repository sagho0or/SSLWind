export interface registerOtpRequestInterface {
  code: string;
  tracking_id: string;
  mobile: string;
}

export interface registerOtpResponseInterface {
  token: string;
}