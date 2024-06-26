import { HYDRATE } from 'next-redux-wrapper';
import {REGISTER_OTP_FAILURE, REGISTER_OTP_LOADING, REGISTER_OTP_SUCCESS} from '@/store/auth/register/registerOtp/action';

const initialState = {
  isDone: false,
  isLoading: false,
  data: {},
  response: {},
  hasError: false,
};

export default function registerOtpReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case REGISTER_OTP_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data,
      };
    case REGISTER_OTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.successRes
      };
    case REGISTER_OTP_FAILURE:
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