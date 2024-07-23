import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ChatResponseInterface } from './chat.interface';

interface ChatState {
  isLoading: boolean;
  isDone: boolean;
  hasError: boolean;
  response: string | null;
}

const initialState: ChatState = {
  isLoading: false,
  isDone: false,
  hasError: false,
  response: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    fetchChatResponse(state, action: PayloadAction<{ userInput: string }>) {
      state.isLoading = true;
      state.isDone = false;
      state.hasError = false;
    },
    fetchChatResponseSuccess(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isDone = true;
      state.response = action.payload;
    },
    fetchChatResponseFailure(state) {
      state.isLoading = false;
      state.isDone = false;
      state.hasError = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.chat,
      };
    });
  },
});

export const { fetchChatResponse, fetchChatResponseSuccess, fetchChatResponseFailure } = chatSlice.actions;
export default chatSlice.reducer;
