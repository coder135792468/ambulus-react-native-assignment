import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Simran Yadav Kumar",
  dob: "23/12/1998",
  gender: "Female",
  phone: "1234567890",
  email: "simram@yadav.com",
  address: "A/B 203-Jorbagh-110023",
  state: "Delhi",
  district: "Central Delhi",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
