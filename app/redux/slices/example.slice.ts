import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TExample, RTKStateEnum } from '~/types';

type TExampleSlice = { value: TExample[]; loading: boolean };

const initialState: TExampleSlice = {
  loading: true,
  value: [],
};

const ExampleSlice = createSlice({
  name: RTKStateEnum.Example,
  initialState,
  reducers: {
    setExampleLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setExample: (state, action: PayloadAction<TExample[]>) => {
      state.loading = false;
      state.value = action.payload;
    },
  },
});

export const { setExample } = ExampleSlice.actions;

export const ExampleReducer = ExampleSlice.reducer;
