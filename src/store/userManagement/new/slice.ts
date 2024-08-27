import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { UserDtoResponse } from '../user.interface';
import { User } from '@/app/components/Management/RoleManagement/interface';

interface userManagementState {
  isLoading: boolean;
  isDone: boolean;
  hasError: boolean;
  response: UserDtoResponse | null;
}

const initialState: userManagementState = {
  isLoading: false,
  isDone: false,
  hasError: false,
  response: null,
};

const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState,
  reducers: {
    fetchUserManagementResponse(state, action: PayloadAction<User>) {
      state.isLoading = true;
      state.isDone = false;
      state.hasError = false;
    },
    fetchUserManagementResponseSuccess(state, action: PayloadAction<UserDtoResponse>) {
      state.isLoading = false;
      state.isDone = true;
      state.response = action.payload;
    },
    fetchUserManagementResponseFailure(state) {
      state.isLoading = false;
      state.isDone = false;
      state.hasError = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.userManagement,
      };
    });
  },
});

export const { fetchUserManagementResponse, fetchUserManagementResponseSuccess, fetchUserManagementResponseFailure } = userManagementSlice.actions;
export default userManagementSlice.reducer;
