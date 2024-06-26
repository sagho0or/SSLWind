import {CoinsStatInterface} from "@/store/CoinsStat/interface";


export const GET_COINSSTAT_LOADING = 'GET_COINSSTAT_LOADING';
export const GET_COINSSTAT_SUCCESS = 'GET_COINSSTAT_SUCCESS';
export const GET_COINSSTAT_FAILURE = 'GET_COINSSTAT_FAILURE';

export const getCoinsStatLoading = () => ({
  type: GET_COINSSTAT_LOADING,
})
export const getCoinsStatSuccess = (response: CoinsStatInterface) => ({
  type: GET_COINSSTAT_SUCCESS,
  response: response
})
export const getCoinsStatFailure = () => ({
  type: GET_COINSSTAT_FAILURE,
})