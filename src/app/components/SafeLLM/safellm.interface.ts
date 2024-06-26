import { ReactNode } from 'react';
import { ExchangeInterface } from './ExchangeTable/exchangeTable.interface';

export interface SafeLLMInterface {
  isModalOpen: boolean;
  setIsModalOpen: (arg: boolean)=>void;
  side: string;
  handleTabClick: (side: string)=>void;
  amountValue?: number;
  handleSearch: ()=>void;
  exchangesList: ExchangeInterface[] | [];
  selectedExchange: ExchangeInterface | null;
}