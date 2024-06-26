import { HYDRATE } from 'next-redux-wrapper';
import {
    GET_AUTH_HISTORY_FAILURE,
    GET_AUTH_HISTORY_LOADING,
    GET_AUTH_HISTORY_SUCCESS
} from "@/store/security/authHistory/action";

const initialState = {
    isDone: false,
    isLoading: false,
    response: {},
    params: {},
    hasError: false,
};

export default function getAuthHistoryReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            }
        case GET_AUTH_HISTORY_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                params: action.params
            }
        case GET_AUTH_HISTORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            }
        case GET_AUTH_HISTORY_FAILURE:
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