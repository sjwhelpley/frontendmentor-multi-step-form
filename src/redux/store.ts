import { configureStore } from '@reduxjs/toolkit';

import formSlice from './slices/formSlice';
import pricesSlice from './slices/pricesSlice';

export const store = configureStore({
  reducer: {
    form: formSlice,
    prices: pricesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
