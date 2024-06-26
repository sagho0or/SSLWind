import { ExchangeInterface } from '@/app/components/SafeLLM/ExchangeTable/exchangeTable.interface';
import {ReactNode} from "react";

export interface ConfirmModalInterface {
  setIsConfirmModalOpen: (isConfirmModalOpen: boolean) => void;
  selectedExchange: ExchangeInterface | null;
  side: string;
  amountValue?: number;
  track_id: string;
  updateExchange: () => void
}