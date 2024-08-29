import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListItem {
  id: string;
  title: string;
  date: string;
}

interface AlertListState {
  items: ListItem[];
  isLoading: boolean;
  hasError: boolean;
  isDone: boolean;
  hasMore: boolean;
  page: number;
  filterTitle: string;
  filterDate: string;
}

const initialState: AlertListState = {
  items: [],
  isLoading: false,
  isDone: false,
  hasError: false,
  hasMore: true,
  page: 1,
  filterTitle: '',
  filterDate: '',
};

const alertListSlice = createSlice({
  name: 'alertList',
  initialState,
  reducers: {
    fetchAlertListRequest(state, action: PayloadAction<{ title: string; date: string }>) {
      state.isLoading = true;
      state.filterTitle = action.payload.title;
      state.filterDate = action.payload.date;
      state.isDone = false;
    },
    fetchAlertListSuccess(state, action: PayloadAction<ListItem[]>) {
      state.isLoading = false;
      state.isDone = true;
      state.items = [...state.items, ...action.payload];
      state.hasMore = action.payload.length > 0;
    },
    fetchAlertListFailure(state) {
      state.isLoading = false;
      state.hasError = true;
    },
    incrementPage(state) {
      state.page += 1;
    },
    resetList(state) {
      state.items = [];
      state.page = 1;
    },
  },
});

export const { fetchAlertListRequest, fetchAlertListSuccess, fetchAlertListFailure, incrementPage, resetList } = alertListSlice.actions;
export default alertListSlice.reducer;
