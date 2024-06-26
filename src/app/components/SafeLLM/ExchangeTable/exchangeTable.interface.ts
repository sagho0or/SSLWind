export interface ExchangeInterface {
    title: string;
    id: number;
}
export interface ExchangeProps {
    onClick: (exchange: ExchangeInterface | null) => void;
    exchangeList: ExchangeInterface[];
    side: string;
}