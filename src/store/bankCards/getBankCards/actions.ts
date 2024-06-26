
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS';
export const GET_CARDS_FAILURE = 'GET_CARDS_FAILURE';
export const GET_CARDS_LOADING = 'GET_CARDS_LOADING';

export const getCardsSuccess = (response: any) => ({
  type: GET_CARDS_SUCCESS,
  response
});
export const getCardsFailure = () => ({
  type: GET_CARDS_FAILURE
});
export const getCardsLoading = () => ({
  type: GET_CARDS_LOADING,
});