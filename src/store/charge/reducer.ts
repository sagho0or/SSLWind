import { HYDRATE } from 'next-redux-wrapper';
import { POST_CHARGE_FAILURE, POST_CHARGE_LOADING, POST_CHARGE_SUCCESS } from '@/store/charge/action';


const initialState = {
  isDone: false,
  isLoading: false,
  data: {},
  response: '',
  hasError: false,
};

export default function postChargeReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }
    case POST_CHARGE_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data,
      }
    case POST_CHARGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      }
    case POST_CHARGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isDone: false,
        hasError: true,
        data: {},
      }
    default:
      return state
  }
}