import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from '@/store/auth/login/form/slice';

const rootReducer = combineReducers({
  login: loginReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
