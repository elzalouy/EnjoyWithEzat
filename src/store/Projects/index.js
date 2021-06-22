import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const ProjectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    selectProjectsByType(state,action){
      state.selectedProjects=state.projects.filter(item=>item.type===action.payload);
    }
  },
});
export const PersonActions = ProjectsSlice.actions;
export default ProjectsSlice.reducer;