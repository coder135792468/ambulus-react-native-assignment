import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limits: [2, 4, 4, 4],
  otpFields: ["", "", "", ""],
  card: {
    title: "Enter ABHA Number below",
    subtitle: "We will send a 6 digit OTP to your mobile(linked to your ABHA)",
  },
  verificationMethods: [
    { id: 1, value: "Aadhaar" },
    { id: 2, value: "Mobile" },
  ],
};

export const adhaSlice = createSlice({
  name: "abha",
  initialState: initialState,
  reducers: {
    deposit: (state: any, action) => {
      state.limits = {};
    },
    withdraw: (state: any, action) => {
      state.limits = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { deposit, withdraw } = adhaSlice.actions;

// We export the reducer function so that it can be added to the store
export default adhaSlice.reducer;
