export interface registerIdentityRequestInterface {
  birth_date: string;
  discount_code: string | null;
  referral_code: string | null;
  national_id: string;
  tracking_id: string;
  mobile: string;
}

export interface registerIdentityResponseInterface {
  token: string;
}