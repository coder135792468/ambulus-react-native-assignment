import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limits: [1, 1, 1, 1, 1, 1],
  isCompleted: false,
  otpFields: ["", "", "", "", "", ""],
  card: {
    title: "Enter OTP",
    verifyInput: true,
  },
};

export const otpSlice = createSlice({
  name: "otp",
  initialState: initialState,
  reducers: {
    setIsOtpCompleted: (state) => {
      state.isCompleted = state.otpFields.every(
        (_, index) => state.otpFields[index].length === state.limits[index]
      );
    },
    setOtpField: (state, action) => {
      state.otpFields = action.payload;
      state.isCompleted = state.otpFields.every(
        (otp, index) => state.otpFields[index].length === state.limits[index]
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOtpField, setIsOtpCompleted } = otpSlice.actions;

// We export the reducer function so that it can be added to the store
export default otpSlice.reducer;
