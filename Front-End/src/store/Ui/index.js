import { createSlice } from "@reduxjs/toolkit";
import UiinitialState from "./initailState";
import reducers from './reducers';


const UiSlice = createSlice({
  name: "UIs",
  initialState: UiinitialState,
  reducers:reducers
});

export const UiActions = UiSlice.actions;
export default UiSlice.reducer;