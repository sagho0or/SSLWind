import {
  GET_CARDS_FAILURE,
  GET_CARDS_LOADING,
  GET_CARDS_SUCCESS
} from "./actions";
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
  isLoading: false,
  isDone: false,
  hasError: '',
  response: '',
  data: {}
};

export default function getCardsReducer (state: any, action: any) {
  if (state === undefined) {
    return initialState
  }
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case GET_CARDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      };
    case GET_CARDS_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false
      };

    case GET_CARDS_FAILURE:
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