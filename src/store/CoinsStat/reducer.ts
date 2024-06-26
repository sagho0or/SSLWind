import { HYDRATE } from 'next-redux-wrapper';
import {
  GET_COINSSTAT_FAILURE,
  GET_COINSSTAT_LOADING,
  GET_COINSSTAT_SUCCESS
} from "@/store/CoinsStat/action";


const initialState = {
  isDone: false,
  isLoading: false,
  response: {},
  hasError: false,
};

export default function getCoinsStatReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }
    case GET_COINSSTAT_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
      }
    case GET_COINSSTAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      }
    case GET_COINSSTAT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isDone: false,
        hasError: true,
      }
    default:
      return state
  }
}