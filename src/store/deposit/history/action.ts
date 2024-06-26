import {
  DepositHistoryInterface, DepositHistoryParams
} from "@/store/deposit/history/depositHistory.interface";

export const GET_DEPOSITHISTORY_SUCCESS = 'GET_DEPOSITHISTORY_SUCCESS';
export const GET_DEPOSITHISTORY_LOADING = 'GET_DEPOSITHISTORY_LOADING';
export const GET_DEPOSITHISTORY_FAILURE = 'GET_DEPOSITHISTORY_FAILURE';

export const getDepositHistorySuccess = (response: DepositHistoryInterface) => ({
  type: GET_DEPOSITHISTORY_SUCCESS,
  response
})
export const getDepositHistoryLoading = (data: DepositHistoryParams) => ({
  type: GET_DEPOSITHISTORY_LOADING,
  data
})
export const getDepositHistoryFailure = (error: any) => ({
  type: GET_DEPOSITHISTORY_FAILURE,
  error
})