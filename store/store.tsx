import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adhaReducer from "./slices/adhaSlice";
import otpReducer from "./slices/otpSlice";
import profileReducer from "./slices/profileSlice";

const rootReducer = combineReducers({
  abha: adhaReducer,
  otp: otpReducer,
  profile: profileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
