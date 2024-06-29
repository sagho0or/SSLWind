import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { LoginOtpInterface } from './loginOtp.interface';
import { LoginOtpResponseInterface } from './loginOtpResponse.interface';

interface LoginOtpState {
  isLoading: boolean;
  isDone: boolean;
  hasError: boolean;
  response: LoginOtpResponseInterface | null;
  data: LoginOtpInterface | null;
}

const initialState: LoginOtpState = {
  isLoading: false,
  isDone: false,
  hasError: false,
  response: null,
  data: null,
};

const loginOtpSlice = createSlice({
  name: 'loginOtp',
  initialState,
  reducers: {
    loginOtpLoading(state, action: PayloadAction<LoginOtpInterface>) {
      state.isLoading = true;
      state.isDone = false;
      state.hasError = false;
      state.data = action.payload;
    },
    loginOtpSuccess(state, action: PayloadAction<LoginOtpResponseInterface>) {
      state.isLoading = false;
      state.isDone = true;
      state.hasError = false;
      state.response = action.payload;
    },
    loginOtpFailure(state) {
      state.isLoading = false;
      state.isDone = false;
      state.hasError = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.loginOtp,
      };
    });
  },
});

export const { loginOtpLoading, loginOtpSuccess, loginOtpFailure } = loginOtpSlice.actions;
export default loginOtpSlice.reducer;
