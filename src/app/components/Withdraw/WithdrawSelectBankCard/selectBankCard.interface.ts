import {GetCardsInterface} from "@/store/bankCards/getBankCards/getCards.interface";

export interface SelectBankCardInterface {
    inputLabel?: string;
    selectedCard?: GetCardsInterface;
    setSelectedCard: (card: GetCardsInterface) => void;
}