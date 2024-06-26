export interface WithdrawHistoryItemInterface {
    symbol: string,
    deposited_amount: number,
    received_amount: number,
    tx: string,
    method: string,
    provider: string,
    status: string,
    created_at: string
}
export interface WithdrawHistoryInterface {
    items: WithdrawHistoryItemInterface[],
    total: number,
    limit: number,
    offset: number
}

export interface WithdrawHistoryParams {
    limit: number,
    offset: number,
    symbol: string,
    from_date?: string,
    to_date?: string,
}