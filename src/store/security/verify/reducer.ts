import { HYDRATE } from 'next-redux-wrapper';
import {
    VERIFY_TOW_FACTOR_AUTHENTICATION_FAILURE,
    VERIFY_TOW_FACTOR_AUTHENTICATION_LOADING,
    VERIFY_TOW_FACTOR_AUTHENTICATION_SUCCESS
} from "@/store/security/verify/action";

const initialState = {
    isDone: false,
    isLoading: false,
    data: '',
    response: {},
    hasError: false,
};

export default function verifytwoFactorAuthenticationReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };
        case VERIFY_TOW_FACTOR_AUTHENTICATION_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                data: action.data,
            };
        case VERIFY_TOW_FACTOR_AUTHENTICATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            };
        case VERIFY_TOW_FACTOR_AUTHENTICATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                isDone: false,
                hasError: true,
            };
        default:
            return state
    }
}