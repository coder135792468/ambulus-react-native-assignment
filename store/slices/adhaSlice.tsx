import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const balanceSlice = createSlice({
  name: "adha",
  initialState: initialState,
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deposit, withdraw } = balanceSlice.actions;

// We export the reducer function so that it can be added to the store
export default balanceSlice.reducer;
