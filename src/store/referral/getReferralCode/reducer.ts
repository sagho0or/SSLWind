import {HYDRATE} from "next-redux-wrapper";
import {
    GET_REFERRAL_CODE_FAILURE,
    GET_REFERRAL_CODE_LOADING,
    GET_REFERRAL_CODE_SUCCESS
} from "@/store/referral/getReferralCode/action";

const initialState = {
    isDone: false,
    isLoading: false,
    response: {},
    hasError: false
}
export default function getReferralCodeReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE: {
            return {...state, ...action.payload};
        }
        case GET_REFERRAL_CODE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            };
        case GET_REFERRAL_CODE_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
            };
        case GET_REFERRAL_CODE_FAILURE:
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