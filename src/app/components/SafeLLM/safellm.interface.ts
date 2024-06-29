import { ReactNode } from 'react';

export interface SafeLLMInterface {
  isModalOpen: boolean;
  setIsModalOpen: (arg: boolean)=>void;
  side: string;
  handleTabClick: (side: string)=>void;
  amountValue?: number;
  handleSearch: ()=>void;
}