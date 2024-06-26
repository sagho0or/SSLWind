import { HYDRATE } from 'next-redux-wrapper';
import {
  GET_WITHDRAWHISTORY_FAILURE,
  GET_WITHDRAWHISTORY_LOADING,
  GET_WITHDRAWHISTORY_SUCCESS
} from "@/store/withdraw/history/action";

const initialState = {
  isDone: false,
  isLoading: false,
  response: {},
  data: {},
  hasError: false
}

export default function getWithdrawtHistoryReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload};
    }
    case GET_WITHDRAWHISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      };
    case GET_WITHDRAWHISTORY_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data
      };
    case GET_WITHDRAWHISTORY_FAILURE:
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