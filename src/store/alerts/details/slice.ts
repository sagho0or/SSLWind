import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: string;
  title: string;
  date: string;
  score: number;
  userName: string;
  lastMessage: string;
  userId: string
}

interface AlertState {
  data: Item | null;
  isLoading: boolean;
  hasError: boolean;
  isDone: boolean;
  hasMore: boolean;
  id: string;
}

const initialState: AlertState = {
  data: null,
  isLoading: false,
  isDone: false,
  hasError: false,
  hasMore: true,
  id: '',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    fetchAlertRequest(state, action: PayloadAction<{ id: string }>) {
      state.isLoading = true;
      state.id = action.payload.id;
      state.isDone = false;
    },
    fetchAlertSuccess(state, action: PayloadAction<Item>) {
      state.isLoading = false;
      state.isDone = true;
      state.data = action.payload;
    },
    fetchAlertFailure(state) {
      state.isLoading = false;
      state.hasError = true;
    }
  },
});

export const { fetchAlertRequest, fetchAlertSuccess, fetchAlertFailure } = alertSlice.actions;
export default alertSlice.reducer;
