import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchWeather, Weather } from './api';

export interface WeatherState {
  // TODO: key data by query
  data: Weather | undefined;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: WeatherState = {
  data: undefined,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'weather/fetchWeather',
  async (query: string) => {
    const response = await fetchWeather(query);
    return response;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export const selectWeather = (state: RootState) => state.weather.data;
export const selectStatus = (state: RootState) => state.weather.status;

export default counterSlice.reducer;
