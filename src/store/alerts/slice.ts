import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListItem {
  id: string;
  title: string;
  date: string;
  score: number;
}

interface AlertListState {
  items: ListItem[];
  isLoading: boolean;
  hasError: boolean;
  isDone: boolean;
  hasMore: boolean;
  page: number;
  filterTitle: string;
  filterStartDate: string;
  filterEndDate: string;
  filterScore: string;
}

const initialState: AlertListState = {
  items: [],
  isLoading: false,
  isDone: false,
  hasError: false,
  hasMore: true,
  page: 1,
  filterTitle: '',
  filterStartDate: '',
  filterEndDate: '',
  filterScore: 'all',
};

const alertListSlice = createSlice({
  name: 'alertList',
  initialState,
  reducers: {
    fetchAlertListRequest(state, action: PayloadAction<{ title: string; startDate: string; endDate: string; score: string }>) {
      state.isLoading = true;
      state.filterTitle = action.payload.title;
      state.filterStartDate = action.payload.startDate;
      state.filterEndDate = action.payload.endDate;
      state.filterScore = action.payload.score;
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
