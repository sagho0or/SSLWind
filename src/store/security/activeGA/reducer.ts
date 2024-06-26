import { HYDRATE } from 'next-redux-wrapper';
import {
    ACTIVE_GA_FAILURE,
    ACTIVE_GA_LOADING,
    ACTIVE_GA_SUCCESS
} from "@/store/security/activeGA/action";

const initialState = {
    isDone: false,
    isLoading: false,
    response: {},
    hasError: false,
};

export default function activeGAReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };
        case ACTIVE_GA_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
            };
        case ACTIVE_GA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response,
            };
        case ACTIVE_GA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isDone: false,
                hasError: true,
                response: {},
            };
        default:
            return state
    }
}