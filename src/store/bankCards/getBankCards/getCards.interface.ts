export interface GetCardsInterface{
  card_number: string;
  bank_name?: string;
  bank_id ?: string;
  sheba ?:string;

  concat(param: {card_number: string}[]): GetCardsInterface | any[];
}