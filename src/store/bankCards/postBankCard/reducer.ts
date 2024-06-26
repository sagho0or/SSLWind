
import {HYDRATE} from 'next-redux-wrapper';
import {
    POST_BANKCARD_FAILURE,
    POST_BANKCARD_LOADING,
    POST_BANKCARD_SUCCESS
} from "@/store/bankCards/postBankCard/action";

const initialState = {
    isLoading: false,
    isDone: false,
    hasError: '',
    data: {}
};

export default function postBankCardReducer (state: any, action: any) {
    if (state === undefined) {
        return initialState
    }
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload };
        }
        case POST_BANKCARD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
            };
        case POST_BANKCARD_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                data: action.data
            };

        case POST_BANKCARD_FAILURE:
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