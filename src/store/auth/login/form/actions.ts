import { LoginInterface } from '@/store/auth/login/form/login.interface';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_LOADING = 'LOGIN_LOADING';

export const loginSuccess = (response: any) => ({
  type: LOGIN_SUCCESS,
  response
});
export const loginFailure = () => ({
  type: LOGIN_FAILURE
});
export const loginLoading = (data: LoginInterface) => ({
  type: LOGIN_LOADING,
  data
});