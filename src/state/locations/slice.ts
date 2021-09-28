import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface LocationState {
  current: string;
  history: string[];
}

const initialState: LocationState = {
  current: '',
  history: [],
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      if (state.history.indexOf(action.payload) === -1) {
        state.history.push(action.payload);
      }
      state.current = action.payload;
    },
  },
});

export const { increment } = locationsSlice.actions;

export const selectCurrent = (state: RootState) => state.locations.current;
export const selectHistory = (state: RootState) => state.locations.history;

export default locationsSlice.reducer;
