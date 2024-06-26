export interface WithdrawRequestInterface {
    address: string,
    amount: number,
    symbol: string,
    provider: string,
}
export interface WithdrawResponseInterface {
    response: string,
}