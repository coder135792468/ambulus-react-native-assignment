import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limits: [1, 1, 1, 1, 1, 1],
  otpFields: ["", "", "", "", "", ""],
  card: {
    title: "Enter OTP",
    verifyInput: true,
  },
};

export const otpSlice = createSlice({
  name: "otp",
  initialState: initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = otpSlice.actions;

// We export the reducer function so that it can be added to the store
export default otpSlice.reducer;
