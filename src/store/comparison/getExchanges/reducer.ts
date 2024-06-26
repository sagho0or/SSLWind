import {GET_EXCHANGES_ERROR, GET_EXCHANGES_LOADING, GET_EXCHANGES_SUCCESS} from "@/store/comparison/getExchanges/action";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
    isLoading: false,
    hasError: false,
    error: '',
    isDone: false,
    data: '',
    parameter: null
}
export default function getExchangesReducer(state: any, action: any){
    if(state == undefined){
        return initialState;
    }
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload };
        }
        case GET_EXCHANGES_LOADING:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                error: '',
                isDone: false,
                data: '',
                parameter: action.parameter
            }
        case GET_EXCHANGES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                error: '',
                isDone: true,
                data: action.data
            }
        case GET_EXCHANGES_ERROR:
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