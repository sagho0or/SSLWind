import {HYDRATE} from "next-redux-wrapper";
import {
    GET_WALLET_CHART_DATA_FAILURE,
    GET_WALLET_CHART_DATA_LOADING,
    GET_WALLET_CHART_DATA_SUCCESS
} from "@/store/wallet/getWalletChart/action";

const initialState = {
    isDone: false,
    isLoading: false,
    response: {},
    hasError: false,
    filterDay:7
}
export default function getWalletChartDataReducer(state: any, action: any) {
    if (state == undefined) {
        return initialState;
    }
    switch (action.type) {
        case HYDRATE: {
            return {...state, ...action.payload};
        }
        case GET_WALLET_CHART_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isDone: true,
                hasError: false,
                response: action.response
            };
        case GET_WALLET_CHART_DATA_LOADING:
            return {
                ...state,
                isLoading: true,
                isDone: false,
                hasError: false,
                filterDay: action.filterDay
            };
        case GET_WALLET_CHART_DATA_FAILURE:
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