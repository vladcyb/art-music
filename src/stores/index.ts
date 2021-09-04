import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { mediaSlice } from './mediaSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: combineReducers({
    media: mediaSlice.reducer,
  }),
});


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export const actions = {
  media: mediaSlice.actions,
};

export default store;
