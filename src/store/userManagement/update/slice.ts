import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { User } from '@/app/components/Management/RoleManagement/interface';
import { UserDtoResponse } from '../user.interface';

interface UpdateUserState {
  isLoading: boolean;
  isDone: boolean;
  hasError: boolean;
  response: UserDtoResponse | null;
}

const initialState: UpdateUserState = {
  isLoading: false,
  isDone: false,
  hasError: false,
  response: null,
};

const updateUserSlice = createSlice({
  name: 'updateUser',
  initialState,
  reducers: {
    updateUserRequest(state, action: PayloadAction<UserDtoResponse>) {
      state.isLoading = true;
      state.isDone = false;
      state.hasError = false;
    },
    updateUserSuccess(state, action: PayloadAction<UserDtoResponse>) {
      state.isLoading = false;
      state.isDone = true;
      state.response = action.payload;
    },
    updateUserFailure(state) {
      state.isLoading = false;
      state.isDone = false;
      state.hasError = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.updateUser,
      };
    });
  },
});

export const { updateUserRequest, updateUserSuccess, updateUserFailure } = updateUserSlice.actions;
export default updateUserSlice.reducer;
