export interface registerPasswordRequestInterface {
  password: string;
  re_password: string;
  mobile: string;
  tracking_id: string;
}

export interface registerPasswordResponseInterface {
  token: string;
  refresh_token: string
}