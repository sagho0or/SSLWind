import {
    KYC_SEND_IDENTITY_SUCCESS,
    KYC_SEND_IDENTITY_LOADING,
    KYC_SEND_IDENTITY_FAILURE
} from "./actions";
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    isLoading: false,
    isDone: false,
    hasError: '',
    response: '',
    data: {}
};

export default function kycSendIdentityReducer (state: any, action: any) {
    if (state === undefined) {
        return initialState
    }
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload };
        }
        case KYC_SEND_IDENTITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            };
        case KYC_SEND_IDENTITY_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                data: action.data
            };

        case KYC_SEND_IDENTITY_FAILURE:
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