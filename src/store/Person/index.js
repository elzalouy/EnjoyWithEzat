import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    selectProjectsByType(state,action){
    }
  },
});
export const PersonActions = PersonSlice.actions;
export default PersonSlice.reducer;
