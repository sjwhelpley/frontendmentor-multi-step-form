import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface ErrorType {
  fieldName: string;
  message: string;
}

interface UserState {
  currentStep: number;
  errors: ErrorType[];
  name: string;
  email: string;
  phone: string;
  planType: string;
  planTier: string;
  addons: string[];
}

const initialState: UserState = {
  currentStep: 1,
  errors: [],
  name: '',
  email: '',
  phone: '',
  planType: 'monthly',
  planTier: 'Arcade',
  addons: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    addError: (state, action: PayloadAction<ErrorType>) => {
      state.errors.push(action.payload);
    },
    removeError: (state, action: PayloadAction<string>) => {
      state.errors = state.errors.filter(
        (error) => error.fieldName !== action.payload
      );
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPlanType: (state, action: PayloadAction<string>) => {
      state.planType = action.payload;
    },
    setPlanTier: (state, action: PayloadAction<string>) => {
      state.planTier = action.payload;
    },
    addAddon: (state, action: PayloadAction<string>) => {
      state.addons.push(action.payload);
    },
    removeAddon: (state, action: PayloadAction<string>) => {
      state.addons = state.addons.filter((addon) => addon !== action.payload);
    },
  },
});

export const {
  setName,
  setEmail,
  setPhone,
  setCurrentStep,
  setPlanType,
  setPlanTier,
  addAddon,
  removeAddon,
  addError,
  removeError,
} = formSlice.actions;

export const selectForm = (state: RootState) => state.form;
export const selectCurrentStep = (state: RootState) => state.form.currentStep;
export const selectName = (state: RootState) => state.form.name;
export const selectEmail = (state: RootState) => state.form.email;
export const selectPhone = (state: RootState) => state.form.phone;
export const selectPlanType = (state: RootState) => state.form.planType;
export const selectPlanTier = (state: RootState) => state.form.planTier;
export const selectAddons = (state: RootState) => state.form.addons;
export const selectErrors = (state: RootState) => state.form.errors;

export default formSlice.reducer;
