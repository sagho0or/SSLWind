import { HYDRATE } from 'next-redux-wrapper';
import {
  GET_WALLET_FAILURE,
  GET_WALLET_LOADING,
  GET_WALLET_SUCCESS,
} from '@/store/wallet/wallet/action';

const initialState = {
  isDone: false,
  isLoading: false,
  response: {},
  hasError: false
}

export default function getWalletReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload};
    }
    case GET_WALLET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      };
    case GET_WALLET_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
      };
    case GET_WALLET_FAILURE:
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