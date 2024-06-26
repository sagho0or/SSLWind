import { registerPasswordRequestInterface, registerPasswordResponseInterface } from "./registerPassword.interface";


export const REGISTER_PASSWORD_LOADING = 'REGISTER_PASSWORD_LOADING';
export const REGISTER_PASSWORD_SUCCESS = 'REGISTER_PASSWORD_SUCCESS';
export const REGISTER_PASSWORD_FAILURE = 'REGISTER_PASSWORD_FAILURE';

export const registerPasswordLoading = (data: registerPasswordRequestInterface)=>({
  type: REGISTER_PASSWORD_LOADING,
  data
})
export const registerPasswordSuccess = (successRes: registerPasswordResponseInterface)=>({
  type: REGISTER_PASSWORD_SUCCESS,
  successRes: successRes
})
export const registerPasswordFailure = ()=>({
  type: REGISTER_PASSWORD_FAILURE
})
