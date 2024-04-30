import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adhaReducer from "./slices/adhaSlice";
import otpReducer from "./slices/otpSlice";

const rootReducer = combineReducers({
  abha: adhaReducer,
  otp: otpReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
