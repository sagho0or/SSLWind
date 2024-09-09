// slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { LoginInterface } from './login.interface';

interface LoginState {
  isLoading: boolean;
  isDone: boolean;
  hasError: boolean;
  response: string;
  data: LoginInterface | null;
}

const initialState: LoginState = {
  isLoading: false,
  isDone: false,
  hasError: false,
  response: '',
  data: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginLoading(state, action: PayloadAction<LoginInterface>) {
      state.isLoading = true;
      state.isDone = false;
      state.hasError = false;
      state.data = action.payload;
    },
    loginSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isDone = true;
      state.hasError = false;
      state.response = action.payload;
    },
    loginFailure(state) {
      state.isLoading = false;
      state.isDone = false;
      state.hasError = true;
    },
    loginReset(state) {
      state.isLoading = false;
      state.isDone = false;
      state.hasError = false;
      state.response = '';
      state.data= null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.login,
      };
    });
  },
});

export const { loginLoading, loginSuccess, loginFailure, loginReset} = loginSlice.actions;
export default loginSlice.reducer;
