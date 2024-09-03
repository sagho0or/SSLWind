import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotificationState {
    count: number;
    lastNotification: any | null;
}

const initialState: NotificationState = {
    count: 0,
    lastNotification: null,
};

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        incrementCount(state) {
            state.count += 1;
        },
        setCount(state, action: PayloadAction<number>) {
            state.count = action.payload;
        },
        setLastNotification(state, action: PayloadAction<any>) {
            state.lastNotification = action.payload;
        },
        resetCount(state) {
            state.count = 0;
        },
    },
});

export const { incrementCount, setCount, setLastNotification, resetCount } = notificationSlice.actions;
export default notificationSlice.reducer;
