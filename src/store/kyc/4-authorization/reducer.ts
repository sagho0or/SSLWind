import {
    KYC_SEND_UID_SUCCESS,
    KYC_SEND_UID_LOADING,
    KYC_SEND_UID_FAILURE
} from "./actions";
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    isLoading: false,
    isDone: false,
    hasError: '',
    response: ''
};

export default function kycSendUidReducer (state: any, action: any) {
    if (state === undefined) {
        return initialState
    }
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload };
        }
        case KYC_SEND_UID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            };
        case KYC_SEND_UID_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false
            };

        case KYC_SEND_UID_FAILURE:
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