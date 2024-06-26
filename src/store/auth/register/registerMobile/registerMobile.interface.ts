export interface RegisterMobileInterface{
  mobile: string,
  //TODO
  //recaptcha_response: string
}

export interface registerMobileResponseInterface {
  TFA: boolean;
  token: string;
  ttl: number
}