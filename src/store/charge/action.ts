import {
  PostChargeInterface,
  postChargeResponseInterface
} from '@/store/charge/interface';

export const POST_CHARGE_LOADING = 'POST_CHARGE-_LOADING'; //TODO: fix
export const POST_CHARGE_SUCCESS = 'POST_CHARGE-_SUCCESS';
export const POST_CHARGE_FAILURE = 'POST_CHARGE-_FAILURE';

export const postChargeLoading = (data: PostChargeInterface) => ({
  type: POST_CHARGE_LOADING,
  data
})
export const postChargeSuccess = (response: postChargeResponseInterface) => ({
  type: POST_CHARGE_SUCCESS,
  response
})
export const postChargeFailure = () => ({
  type: POST_CHARGE_FAILURE,
})