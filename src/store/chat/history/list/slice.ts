// src/store/chatHistory/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatHistoryItem {
  id: string;
  date: string;
  title: string;
}

interface ChatHistoryListState {
  items: ChatHistoryItem[];
  isLoading: boolean;
  isDone: boolean,
  hasError: boolean,
  hasMore: boolean;
  page: number;
}

const initialState: ChatHistoryListState = {
  items: [],
  isLoading: false,
  isDone: false,
  hasError: false,
  hasMore: true,
  page: 1,
};

const chatHistoryListSlice = createSlice({
  name: 'chatHistoryList',
  initialState,
  reducers: {
    fetchChatHistoryListRequest(state) {
      state.isLoading = true;
      state.isDone = false;
      state.hasMore = false;
    },
    fetchChatHistoryListSuccess(state, action: PayloadAction<ChatHistoryItem[]>) {
      state.isLoading = false;
      state.isDone = true;
      state.items = [...state.items, ...action.payload];
      state.hasMore = action.payload.length > 0;
    },
    fetchChatHistoryListFailure(state) {
      state.isLoading = false;
      state.hasMore = true;
    },
    incrementPage(state) {
      state.page += 1;
    }
  },
});

export const {
  fetchChatHistoryListRequest,
  fetchChatHistoryListSuccess,
  fetchChatHistoryListFailure,
  incrementPage,
} = chatHistoryListSlice.actions;

export default chatHistoryListSlice.reducer;
