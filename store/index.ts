import { configureStore } from '@reduxjs/toolkit';
import guestReducer from './guestSlice';

export const store = configureStore({
  reducer: {
    guest: guestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
