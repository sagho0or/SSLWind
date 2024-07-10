export interface registerIdentityRequestInterface {
  birth_date: string;
  discount_code: string | null;
  referral_code: string | null;
  national_id: string;
  trackingId: string;
  mobile: string;
}

export interface registerIdentityResponseInterface {
  token: string;
}