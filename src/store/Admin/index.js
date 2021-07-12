import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from './reducers';
const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: reducers
});
export const AdminActions=AdminSlice.actions;
export default AdminSlice.reducer;
