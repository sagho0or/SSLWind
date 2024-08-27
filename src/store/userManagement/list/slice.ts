import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { UserDtoResponse } from '../user.interface';

interface UserListState {
  isLoading: boolean;
  isDone: boolean;
  hasError: boolean;
  response: Array<UserDtoResponse>  | null;
}

const initialState: UserListState = {
  isLoading: false,
  isDone: false,
  hasError: false,
  response: null,
};

const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    fetchUserList(state) {
      state.isLoading = true;
      state.isDone = false;
      state.hasError = false;
    },
    fetchUserListSuccess(state, action: PayloadAction<Array<UserDtoResponse>>) {
      state.isLoading = false;
      state.isDone = true;
      state.response = action.payload;
    },
    fetchUserListFailure(state) {
      state.isLoading = false;
      state.isDone = false;
      state.hasError = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.userList,
      };
    });
  },
});

export const { fetchUserList, fetchUserListSuccess, fetchUserListFailure } = userListSlice.actions;
export default userListSlice.reducer;
