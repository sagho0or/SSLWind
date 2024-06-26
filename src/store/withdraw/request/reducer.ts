import {HYDRATE} from "next-redux-wrapper";
import {
    POST_WITHDRAW_REQUEST_ERROR,
    POST_WITHDRAW_REQUEST_LOADING,
    POST_WITHDRAW_REQUEST_SUCCESS
} from "@/store/withdraw/request/action";

const initialState = {
    isLoading: false,
    hasError: false,
    error: '',
    isDone: false,
    data: {},
    response: {},
}
export default function withdrawRequestReducer(state: any, action: any){
    if(state == undefined){
        return initialState;
    }
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload };
        }
        case POST_WITHDRAW_REQUEST_LOADING:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                error: '',
                isDone: false,
                data: action.data
            }
        case POST_WITHDRAW_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                error: '',
                isDone: true,
                response: action.response
            }
        case POST_WITHDRAW_REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true,
                error: action.error,
                isDone: false,
            }
        default:
            return state
    }
}
