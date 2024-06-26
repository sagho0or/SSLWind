import { HYDRATE } from 'next-redux-wrapper';
import {
  REGISTER_MOBILE_FAILURE,
  REGISTER_MOBILE_LOADING,
  REGISTER_MOBILE_SUCCESS,
} from '@/store/auth/register/registerMobile/action';

const initialState = {
  isDone: false,
  isLoading: false,
  data: {},
  response: {},
  hasError: false,
};

export default function registerMobileReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case REGISTER_MOBILE_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data,
      };
    case REGISTER_MOBILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.successRes
      };
    case REGISTER_MOBILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isDone: false,
        hasError: true,
        data: {},
      };
    default:
      return state
  }
}