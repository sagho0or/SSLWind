import { HYDRATE } from 'next-redux-wrapper';
import { LOGIN_OTP_FAILURE, LOGIN_OTP_LOADING, LOGIN_OTP_SUCCESS } from '@/store/auth/login/otp/actions';

const initialState = {
  isDone: false,
  isLoading: false,
  data: '',
  hasError: false,
  response: {}
}
export default function LoginOtpReducer(state: any, action: any){
  if (state === undefined) {
    return initialState
  }
  switch (action.type){
    case HYDRATE:
      return { ...state, ...action.payload }
    case LOGIN_OTP_LOADING:
      return {
        ...state,
        isDone: false,
        isLoading: true,
        data: action.data,
        hasError: false,
        response: {}
      }
    case LOGIN_OTP_SUCCESS:
      return {
        ...state,
        isDone: true,
        isLoading: false,
        hasError: false,
        data: '',
        response: action.response
      }
    case LOGIN_OTP_FAILURE:
      return {
        ...state,
        isDone: false,
        isLoading: false,
        hasError: true,
        data: '',
        response: {}
      }
    default:
      return state;
  }
}