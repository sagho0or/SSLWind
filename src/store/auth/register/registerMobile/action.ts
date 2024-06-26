import {
  RegisterMobileInterface,
  registerMobileResponseInterface,
} from '@/store/auth/register/registerMobile/registerMobile.interface';
import { ErrorInterface } from '@/store/_interfaces/error.interface';
import { any } from 'prop-types';

export const REGISTER_MOBILE_LOADING = 'REGISTER_MOBILE_LOADING';
export const REGISTER_MOBILE_SUCCESS = 'REGISTER_MOBILE_SUCCESS';
export const REGISTER_MOBILE_FAILURE = 'REGISTER_MOBILE_FAILURE';

export const registerMobileLoading = (data: RegisterMobileInterface)=>({
  type: REGISTER_MOBILE_LOADING,
  data
})
export const registerMobileSuccess = (successRes: registerMobileResponseInterface)=>({
  type: REGISTER_MOBILE_SUCCESS,
  successRes: successRes
})
export const registerMobileFailure = ()=>({
  type: REGISTER_MOBILE_FAILURE
})
