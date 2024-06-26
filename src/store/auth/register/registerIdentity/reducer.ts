import { HYDRATE } from 'next-redux-wrapper';
import {REGISTER_IDENTITY_FAILURE, REGISTER_IDENTITY_LOADING, REGISTER_IDENTITY_SUCCESS} from "@/store/auth/register/registerIdentity/action";

const initialState = {
  isDone: false,
  isLoading: false,
  data: {},
  response: {},
  hasError: false,
};

export default function registerIdentityReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case REGISTER_IDENTITY_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data,
      };
    case REGISTER_IDENTITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.successRes
      };
    case REGISTER_IDENTITY_FAILURE:
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