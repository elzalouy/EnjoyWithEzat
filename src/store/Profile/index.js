import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const ProfileSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setLanguagePercent(state,action){
      state.languages.find(item=>item.key===action.payload.element).value=action.payload.value;
    }
  },
});
export const PersonActions = ProfileSlice.actions;
export default ProfileSlice.reducer;
