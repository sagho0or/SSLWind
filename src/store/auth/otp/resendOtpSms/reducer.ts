import { HYDRATE } from 'next-redux-wrapper';
import {RESEND_OTP_SMS_FAILURE, RESEND_OTP_SMS_LOADING, RESEND_OTP_SMS_SUCCESS} from '@/store/auth/otp/resendOtpSms/action';

const initialState = {
  isDone: false,
  isLoading: false,
  data: {},
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
    case RESEND_OTP_SMS_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data,
      };
    case RESEND_OTP_SMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
      };
    case RESEND_OTP_SMS_FAILURE:
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