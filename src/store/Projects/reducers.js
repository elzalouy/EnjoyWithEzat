export const selectProjectsByType = (state, action) => {
  if(typeof action.payload==='string'){
    if (action.payload === "all") state.selectedProjects = state.projects;
    else {
      state.selectedProjects = state.projects.filter((item) =>
      item.category.includes(action.payload)
      );
      state.selectedCategory = action.payload;
    }
  }
};
const exports={selectProjectsByType};
export default exports;