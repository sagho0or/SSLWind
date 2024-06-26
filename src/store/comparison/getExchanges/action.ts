
import {ErrorInterface} from "@/store/_interfaces/error.interface";

export const GET_EXCHANGES_LOADING = 'GET_EXCHANGES_LOADING';
export const GET_EXCHANGES_SUCCESS = 'GET_EXCHANGES_SUCCESS';
export const GET_EXCHANGES_ERROR = 'GET_EXCHANGES_ERROR';

export const getExchangesLoading = (parameter: any) => ({
    type: GET_EXCHANGES_LOADING,
    parameter
})
export const getExchangesSuccess = (data: any)=>({
    type: GET_EXCHANGES_SUCCESS,
    data
})
export const getExchangesError = (error: ErrorInterface) =>({
    type: GET_EXCHANGES_ERROR,
    error
})
