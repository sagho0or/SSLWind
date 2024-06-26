import { HYDRATE } from 'next-redux-wrapper';
import {
    EDIT_PASSWORD_FAILURE,
    EDIT_PASSWORD_LOADING,
    EDIT_PASSWORD_SUCCESS
} from "@/store/security/editPassword/action";

const initialState = {
    isDone: false,
    isLoading: false,
    data: {},
    response: {},
    hasError: false,
};

export default function editPasswordReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };
        case EDIT_PASSWORD_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                data: action.data
            };
        case EDIT_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response,
            };
        case EDIT_PASSWORD_FAILURE:
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