import { createAction } from '@reduxjs/toolkit';
import { StateType } from './types';

export const actions = {
  setMedia: createAction<StateType>('media/setMedia'),
};
