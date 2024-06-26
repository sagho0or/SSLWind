export interface CoinsStatInterface {
    high_price: number,
    low_price: number,
    last_price: number,
    price_change: number,
    price_change_percent: number,
    volume: number,
    open_price: number,
    ascending: boolean,
    high_price_irt: number,
    low_price_irt: number,
    last_price_irt: number,
    volume_irt: number,
    popularity: number,
    symbol: string,
    market: string,
    chart_url: string,
    market_cap: number
}