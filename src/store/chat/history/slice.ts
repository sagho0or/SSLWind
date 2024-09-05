import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ChatHistoryResponseInterface } from '../new/chat.interface';

interface ChathistoryState {
  isLoading: boolean;
  isDone: boolean;
  hasError: boolean;
  hasMore : boolean;
  response: ChatHistoryResponseInterface  | null;
}

const initialState: ChathistoryState = {
  isLoading: false,
  isDone: false,
  hasError: false,
  hasMore: false,
  response: null,
};

const chathistorySlice = createSlice({
  name: 'chathistory',
  initialState,
  reducers: {
    fetchChatHistory(state, action: PayloadAction<{ chatId: string, page: number }>) {
      state.isLoading = true;
      state.isDone = false;
      state.hasError = false;
    },
    fetchChatHistorySuccess(state, action: PayloadAction<ChatHistoryResponseInterface>) {
      state.isLoading = false;
      state.isDone = true;
      
      state.response = {
        list: [...action.payload.list, ...state.response?.list || []],
        id: action.payload.id,
        date: action.payload.date
      };
      state.hasMore = action.payload.list?.length == 10;
    },
    fetchChatHistoryFailure(state) {
      state.isLoading = false;
      state.isDone = false;
      state.hasError = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.chathistory,
      };
    });
  },
});

export const { fetchChatHistory, fetchChatHistorySuccess, fetchChatHistoryFailure } = chathistorySlice.actions;
export default chathistorySlice.reducer;
