import { HYDRATE } from 'next-redux-wrapper';
import {
    GET_ORDER_HISTORY_FAILURE,
    GET_ORDER_HISTORY_LOADING,
    GET_ORDER_HISTORY_SUCCESS
} from "@/store/history/action";

const initialState = {
    isDone: false,
    isLoading: false,
    response: {},
    params: {},
    hasError: false,
};

export default function getOrderHistoryReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            }
        case GET_ORDER_HISTORY_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                params: action.params
            }
        case GET_ORDER_HISTORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            }
        case GET_ORDER_HISTORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isDone: false,
                hasError: true,
            }
        default:
            return state
    }
}