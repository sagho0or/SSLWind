import {HYDRATE} from "next-redux-wrapper";
import {
    GET_ADDRESS_FAILURE,
    GET_ADDRESS_LOADING,
    GET_ADDRESS_SUCCESS
} from "@/store/deposit/address/action";

const initialState = {
    isDone: false,
    isLoading: false,
    response: {},
    data: {},
    hasError: false
}
 export default function getDepositAddressReducer(state: any, action: any) {
     if (state == undefined) {
         return initialState;
     }
     switch (action.type) {
         case HYDRATE: {
             return {...state, ...action.payload};
         }
         case GET_ADDRESS_SUCCESS:
             return {
                 ...state,
                 isLoading: false,
                 isDone: true,
                 hasError: false,
                 response: action.response
             };
         case GET_ADDRESS_LOADING:
             return {
                 ...state,
                 isLoading: true,
                 isDone: false,
                 hasError: false,
                 data: action.data
             };
         case GET_ADDRESS_FAILURE:
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