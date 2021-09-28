import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import locationsReducer from '../state/locations/slice';
import weatherReducer from '../state/weather/slice';

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
