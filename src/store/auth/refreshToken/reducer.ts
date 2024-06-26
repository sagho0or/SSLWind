import { HYDRATE } from 'next-redux-wrapper';
import {REFRESH_TOKEN_FAILURE, REFRESH_TOKEN_LOADING, REFRESH_TOKEN_SUCCESS} from '@/store/auth/refreshToken/action';

const initialState = {
  isDone: false,
  isLoading: false,
  hasError: false,
};

export default function resendOtpSmsReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case REFRESH_TOKEN_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
      };
    case REFRESH_TOKEN_FAILURE:
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