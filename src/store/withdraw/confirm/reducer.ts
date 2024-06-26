import {HYDRATE} from 'next-redux-wrapper';
import {
    CONFIRM_WITHDRAW_FAILURE,
    CONFIRM_WITHDRAW_LOADING,
    CONFIRM_WITHDRAW_SUCCESS
} from "@/store/withdraw/confirm/actions";

const initialState = {
    isLoading: false,
    isDone: false,
    hasError: '',
    response: {},
    data: {}
};

export default function confirmWithdrawReducer (state: any, action: any) {
    if (state === undefined) {
        return initialState
    }
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload };
        }
        case CONFIRM_WITHDRAW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            };
        case CONFIRM_WITHDRAW_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                data: action.data
            };

        case CONFIRM_WITHDRAW_FAILURE:
            return {
                ...state,
                isLoading: false,
                isDone: false,
                hasError: true,
            };
        default:
            return state;
    }
}