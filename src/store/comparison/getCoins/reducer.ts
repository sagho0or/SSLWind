import {GET_COINS_ERROR, GET_COINS_LOADING, GET_COINS_SUCCESS} from "@/store/comparison/getCoins/action";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
    isLoading: false,
    hasError: false,
    error: '',
    isDone: false,
    data: '',
}
export default function getIconsReducer(state: any, action: any){
    if(state == undefined){
        return initialState;
    }
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload };
        }
        case GET_COINS_LOADING:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                error: '',
                isDone: false,
                data: ''
            }
        case GET_COINS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                error: '',
                isDone: true,
                data: action.data
            }
        case GET_COINS_ERROR:
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