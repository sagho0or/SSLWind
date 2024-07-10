export interface registerPasswordRequestInterface {
  password: string;
  re_password: string;
  mobile: string;
  trackingId: string;
}

export interface registerPasswordResponseInterface {
  token: string;
  refresh_token: string
}