export interface Cookies {
  'auth-refresh': string,
  'auth-token': string
}

export interface OrderInterface {
  exchangeId: number | null;
  track_id: string;
  cookie : Cookies;
}