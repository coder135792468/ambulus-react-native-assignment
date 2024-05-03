import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limits: [2, 4, 4, 4],
  isCompleted: false,
  abhNumberFields: ["", "", "", ""],
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
    setIsAbhaCompleted: (state) => {
      state.isCompleted = state.abhNumberFields.every(
        (_, index) =>
          state.abhNumberFields[index].length === state.limits[index]
      );
    },
    setAbhaField: (state, action) => {
      state.abhNumberFields = action.payload;
      state.isCompleted = state.abhNumberFields.every(
        (_, index) =>
          state.abhNumberFields[index].length === state.limits[index]
      );
    },
  },
});

export const { setIsAbhaCompleted, setAbhaField } = adhaSlice.actions;

export default adhaSlice.reducer;
