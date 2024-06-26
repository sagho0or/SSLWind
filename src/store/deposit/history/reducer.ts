import { HYDRATE } from 'next-redux-wrapper';
import {
  GET_DEPOSITHISTORY_FAILURE,
  GET_DEPOSITHISTORY_LOADING,
  GET_DEPOSITHISTORY_SUCCESS
} from "@/store/deposit/history/action";

const initialState = {
  isDone: false,
  isLoading: false,
  response: {},
  data: {},
  hasError: false
}

export default function getDepositHistoryReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload};
    }
    case GET_DEPOSITHISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      };
    case GET_DEPOSITHISTORY_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data
      };
    case GET_DEPOSITHISTORY_FAILURE:
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