import {CoinInterface} from "@/app/interfaces/coin.interface";
import {ErrorInterface} from "@/store/_interfaces/error.interface";

export const GET_COINS_LOADING = 'GET_COINS_LOADING';
export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS';
export const GET_COINS_ERROR = 'GET_COINS_ERROR';

export const getCoinsLoading = () => ({
    type: GET_COINS_LOADING
})
export const getCoinsSuccess = (data: CoinInterface[])=>({
    type: GET_COINS_SUCCESS,
    data
})
export const getCoinsError = (error: ErrorInterface) =>({
    type: GET_COINS_ERROR,
    error
})
