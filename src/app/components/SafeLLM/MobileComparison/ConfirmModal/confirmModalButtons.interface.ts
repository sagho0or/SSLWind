import { ExchangeInterface } from '@/app/components/SafeLLM/ExchangeTable/exchangeTable.interface';

export interface ConfirmModalButtonsInterface{
  setIsConfirmModalOpen: (isConfirmModalOpen: boolean)=> void;
  selectedExchange: ExchangeInterface | null;
  side: string;
  track_id: string,
  getExchanges: () => void
}