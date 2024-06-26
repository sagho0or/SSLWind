import {WalletInterface} from "@/store/wallet/wallet/wallet.interface";


export const GET_WALLET_SUCCESS = 'GET_WALLET_SUCCESS';
export const GET_WALLET_LOADING = 'GET_WALLET_LOADING';
export const GET_WALLET_FAILURE = 'GET_WALLET_FAILURE';

export const getWalletSuccess = (response: WalletInterface) => ({
  type: GET_WALLET_SUCCESS,
  response
})
export const getWalletLoading = () => ({
  type: GET_WALLET_LOADING,
})
export const getWalletFailure = (error: any) => ({
  type: GET_WALLET_FAILURE,
  error
})