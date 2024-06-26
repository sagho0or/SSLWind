import {POST_ORDER_ERROR, POST_ORDER_LOADING, POST_ORDER_SUCCESS} from "@/store/comparison/postOrder/action";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
    isLoading: false,
    hasError: false,
    error: '',
    isDone: false,
    data: '',
}
export default function orderReducer(state: any, action: any){
    if(state == undefined){
        return initialState;
    }
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload };
        }
        case POST_ORDER_LOADING:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                error: '',
                isDone: false,
                data: ''
            }
        case POST_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                error: '',
                isDone: true,
                data: action.data
            }
        case POST_ORDER_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true,
                error: action.error,
                isDone: false,
                data: ''
            }
        default:
            return state
    }
}