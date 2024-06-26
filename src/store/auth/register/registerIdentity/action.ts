import { registerIdentityRequestInterface, registerIdentityResponseInterface } from "./registerIdentity.interface";

export const REGISTER_IDENTITY_LOADING = 'REGISTER_IDENTITY_LOADING';
export const REGISTER_IDENTITY_SUCCESS = 'REGISTER_IDENTITY_SUCCESS';
export const REGISTER_IDENTITY_FAILURE = 'REGISTER_IDENTITY_FAILURE';

export const registerIdentityLoading = (data: registerIdentityRequestInterface)=>({
  type: REGISTER_IDENTITY_LOADING,
  data
})
export const registerIdentitySuccess = (successRes: registerIdentityResponseInterface)=>({
  type: REGISTER_IDENTITY_SUCCESS,
  successRes: successRes
})
export const registerIdentityFailure = ()=>({
  type: REGISTER_IDENTITY_FAILURE
})
