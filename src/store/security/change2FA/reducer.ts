import { HYDRATE } from 'next-redux-wrapper';
import {
    CHANGE_2FA_FAILURE,
    CHANGE_2FA_LOADING,
    CHANGE_2FA_SUCCESS
} from "@/store/security/change2FA/action";

const initialState = {
    isDone: false,
    isLoading: false,
    data: {},
    response: {},
    hasError: false,
};

export default function change2FAReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };
        case CHANGE_2FA_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                data: action.data
            };
        case CHANGE_2FA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response,
            };
        case CHANGE_2FA_FAILURE:
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