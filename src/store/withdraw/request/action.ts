import {
    WithdrawRequestInterface
} from "@/store/withdraw/request/withdraw.interface";

export const POST_WITHDRAW_REQUEST_LOADING = 'POST_WITHDRAW_REQUEST_LOADING';
export const POST_WITHDRAW_REQUEST_SUCCESS = 'POST_WITHDRAW_REQUEST_SUCCESS';
export const POST_WITHDRAW_REQUEST_ERROR = 'POST_WITHDRAW_REQUEST_ERROR';

export const withdrawRequestLoading = (data: WithdrawRequestInterface) => ({
    type: POST_WITHDRAW_REQUEST_LOADING,
    data
})
export const withdrawRequestSuccess = (response: any)=>({
    type: POST_WITHDRAW_REQUEST_SUCCESS,
    response
})
export const withdrawRequestError = () =>({
    type: POST_WITHDRAW_REQUEST_ERROR,
})
