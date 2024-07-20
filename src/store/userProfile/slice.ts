import { UserProfileResponseInterface } from './interface';
// slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface UserProfileState {
  isLoading: boolean;
  isDone: boolean;
  hasError: boolean;
  response: string;
  data: UserProfileResponseInterface | null;
}

const initialState: UserProfileState = {
  isLoading: false,
  isDone: false,
  hasError: false,
  response: '',
  data: null,
};

const getUserProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    getUserProfileLoading(state) {
      state.isLoading = true;
      state.isDone = false;
      state.hasError = false;
    },
    getUserProfileSuccess(state, action: PayloadAction<UserProfileResponseInterface>) {
      state.isLoading = false;
      state.isDone = true;
      state.hasError = false;
      state.data = action.payload;
    },
    getUserProfileFailure(state) {
      state.isLoading = false;
      state.isDone = false;
      state.hasError = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.userProfile,
      };
    });
  },
});

export const { getUserProfileLoading, getUserProfileSuccess, getUserProfileFailure } = getUserProfileSlice.actions;
export default getUserProfileSlice.reducer;
