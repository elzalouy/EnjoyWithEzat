import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducers";

const ProjectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers:reducers
});

export const ProjectsActions = ProjectsSlice.actions;
export default ProjectsSlice.reducer;