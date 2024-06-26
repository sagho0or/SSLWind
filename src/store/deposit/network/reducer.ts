import { HYDRATE } from 'next-redux-wrapper';
import { GET_NETWORK_FAILURE, GET_NETWORK_LOADING, GET_NETWORK_SUCCESS } from '@/store/deposit/network/action';

const initialState = {
  isDone: false,
  isLoading: false,
  response: {},
  hasError: false,
};

export default function getNetworksReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case GET_NETWORK_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
      };
    case GET_NETWORK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      };
    case GET_NETWORK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isDone: false,
        hasError: true,
        response: {}
      };
    default:
      return state
  }
}