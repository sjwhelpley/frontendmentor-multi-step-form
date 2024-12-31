import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface PricesState {
  monthly: {
    arcade: number;
    advanced: number;
    pro: number;
    'online-service': number;
    'larger-storage': number;
    'customizable-profile': number;
  };
  yearly: {
    arcade: number;
    advanced: number;
    pro: number;
    'online-service': number;
    'larger-storage': number;
    'customizable-profile': number;
  };
}

const initialState: PricesState = {
  monthly: {
    arcade: 9,
    advanced: 12,
    pro: 15,
    'online-service': 1,
    'larger-storage': 2,
    'customizable-profile': 2,
  },
  yearly: {
    arcade: 90,
    advanced: 120,
    pro: 150,
    'online-service': 10,
    'larger-storage': 20,
    'customizable-profile': 20,
  },
};

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
});

export const selectPrices = (state: RootState) => state.prices;
export const selectMonthlyPrices = (state: RootState) => state.prices.monthly;
export const selectYearlyPrices = (state: RootState) => state.prices.yearly;
export default pricesSlice.reducer;
