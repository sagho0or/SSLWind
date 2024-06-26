import { HYDRATE } from 'next-redux-wrapper';
import {
    ACTIVE_TOW_FACTOR_AUTHENTICATION_FAILURE,
    ACTIVE_TOW_FACTOR_AUTHENTICATION_LOADING,
    ACTIVE_TOW_FACTOR_AUTHENTICATION_SUCCESS
} from "@/store/security/active/action";

const initialState = {
    isDone: false,
    isLoading: false,
    response: {},
    hasError: false,
};

export default function activeTwoFactorAuthenticationReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };
        case ACTIVE_TOW_FACTOR_AUTHENTICATION_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
            };
        case ACTIVE_TOW_FACTOR_AUTHENTICATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response,
            };
        case ACTIVE_TOW_FACTOR_AUTHENTICATION_FAILURE:
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