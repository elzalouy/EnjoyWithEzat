import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const ProfileSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
  },
});
export const PersonActions = ProfileSlice.actions;
export default ProfileSlice.reducer;
