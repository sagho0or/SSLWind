import {
  WithdrawHistoryInterface, WithdrawHistoryParams
} from "@/store/withdraw/history/withdrawHistory.interface";

export const GET_WITHDRAWHISTORY_SUCCESS = 'GET_WITHDRAWHISTORY_SUCCESS';
export const GET_WITHDRAWHISTORY_LOADING = 'GET_WITHDRAWHISTORY_LOADING';
export const GET_WITHDRAWHISTORY_FAILURE = 'GET_WITHDRAWHISTORY_FAILURE';

export const getWithdrawHistorySuccess = (response: WithdrawHistoryInterface) => ({
  type: GET_WITHDRAWHISTORY_SUCCESS,
  response
})
export const getWithdrawHistoryLoading = (data: WithdrawHistoryParams) => ({
  type: GET_WITHDRAWHISTORY_LOADING,
  data
})
export const getWithdrawHistoryFailure = (error: any) => ({
  type: GET_WITHDRAWHISTORY_FAILURE,
  error
})