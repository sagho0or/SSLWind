import {
    ConfirmWithdrawDataInterface
} from "@/store/withdraw/confirm/confirmWithdraw.interface";

export const CONFIRM_WITHDRAW_SUCCESS = 'CONFIRM_WITHDRAW_SUCCESS';
export const CONFIRM_WITHDRAW_FAILURE = 'CONFIRM_WITHDRAW_FAILURE';
export const CONFIRM_WITHDRAW_LOADING = 'CONFIRM_WITHDRAW_LOADING';

export const confirmWithdrawSuccess = (response: any) => ({
    type: CONFIRM_WITHDRAW_SUCCESS,
    response
});
export const confirmWithdrawFailure = () => ({
    type: CONFIRM_WITHDRAW_FAILURE
});
export const confirmWithdrawLoading = (data: ConfirmWithdrawDataInterface) => ({
    type: CONFIRM_WITHDRAW_LOADING,
    data
});