import { configureStore } from '@reduxjs/toolkit';
//====================================================================
import { RTKStateEnum } from '~/types';
import { ExampleReducer } from './slices';

export const store = configureStore({
  reducer: {
    [RTKStateEnum.Example]: ExampleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // thunk: {},
      serializableCheck: false,
    }),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
