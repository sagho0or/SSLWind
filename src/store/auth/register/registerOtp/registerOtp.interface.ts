export interface registerOtpRequestInterface {
  code: string;
  trackingId: string;
  mobile: string;
}

export interface registerOtpResponseInterface {
  token: string;
}