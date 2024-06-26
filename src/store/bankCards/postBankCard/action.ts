import {PostBankCardInterface} from "@/store/bankCards/postBankCard/interface";


export const POST_BANKCARD_SUCCESS = 'POST_BANKCARD_SUCCESS';
export const POST_BANKCARD_FAILURE = 'POST_BANKCARD_FAILURE';
export const POST_BANKCARD_LOADING = 'POST_BANKCARD_LOADING';

export const postBankCardSuccess = () => ({
    type: POST_BANKCARD_SUCCESS
});
export const postBankCardFailure = () => ({
    type: POST_BANKCARD_FAILURE
});
export const postBankCardLoading = (data: PostBankCardInterface) => ({
    type: POST_BANKCARD_LOADING,
    data
});