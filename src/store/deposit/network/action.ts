import { NetworkResponseInterface } from '@/store/deposit/network/network.interface';

export const GET_NETWORK_LOADING = 'GET_NETWORK_LOADING';
export const GET_NETWORK_SUCCESS = 'GET_NETWORK_SUCCESS';
export const GET_NETWORK_FAILURE = 'GET_NETWORK_FAILURE';

export const getNetworkLoading = () => ({
  type: GET_NETWORK_LOADING
})
export const getNetworkSuccess = (response: NetworkResponseInterface) => ({
  type: GET_NETWORK_SUCCESS,
  response: response
})
export const getNetworkFailure = () => ({
  type: GET_NETWORK_FAILURE
})