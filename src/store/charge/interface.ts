export interface PostChargeInterface {
  amount: number,
  symbol: string,
  discount_code?: string
}

export interface postChargeResponseInterface {
  url: string,
}