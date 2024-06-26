
import {ErrorInterface} from "@/store/_interfaces/error.interface";
import { OrderInterface } from '@/store/comparison/postOrder/order.interface';

export const POST_ORDER_LOADING = 'POST_ORDER_LOADING';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_ERROR = 'POST_ORDER_ERROR';

export const postOrderLoading = (inputData: OrderInterface) => ({
    type: POST_ORDER_LOADING,
    inputData
})
export const postOrderSuccess = ()=>({
    type: POST_ORDER_SUCCESS,

})
export const postOrderError = (error: ErrorInterface) =>({
    type: POST_ORDER_ERROR,
    error
})
