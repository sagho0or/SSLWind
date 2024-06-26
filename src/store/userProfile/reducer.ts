import {HYDRATE} from "next-redux-wrapper";
import {
    GET_USERPROFILE_FAILURE,
    GET_USERPROFILE_LOADING,
    GET_USERPROFILE_SUCCESS
} from "@/store/userProfile/action";

const initialState = {
    isDone: false,
    isLoading: false,
    response: {},
    hasError: false
}
export default function getUserProfileReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE: {
            return {...state, ...action.payload};
        }
        case GET_USERPROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            };
        case GET_USERPROFILE_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
            };
        case GET_USERPROFILE_FAILURE:
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