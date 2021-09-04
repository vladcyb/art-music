import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateType } from './types';

const initialState: StateType = {
  unknown: true,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
};

export const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setMedia: (state, { payload }: PayloadAction<StateType>) => payload,
  },
});
