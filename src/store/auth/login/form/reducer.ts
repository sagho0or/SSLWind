import {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS
} from "./actions";
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
  isLoading: false,
  isDone: false,
  hasError: '',
  response: '',
  data: {}
};

export default function loginReducer (state: any, action: any) {
  if (state === undefined) {
    return initialState
  }
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      };
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data
      };

    case LOGIN_FAILURE:
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