import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limits: [1, 1, 1, 1, 1, 1],
  isCompleted: false,
  otpFields: ["", "", "", "", "", ""],
  otp: "123456",
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

export const { setOtpField, setIsOtpCompleted } = otpSlice.actions;

export default otpSlice.reducer;
