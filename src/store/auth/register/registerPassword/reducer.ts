import { HYDRATE } from 'next-redux-wrapper';
import {REGISTER_PASSWORD_FAILURE, REGISTER_PASSWORD_LOADING, REGISTER_PASSWORD_SUCCESS} from '@/store/auth/register/registerPassword/action';

const initialState = {
  isDone: false,
  isLoading: false,
  data: {},
  response: {},
  hasError: false,
};

export default function registerPasswordReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case REGISTER_PASSWORD_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data,
      };
    case REGISTER_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.successRes
      };
    case REGISTER_PASSWORD_FAILURE:
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