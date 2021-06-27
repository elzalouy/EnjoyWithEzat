// switch between sections
const Switch = (state, action) => {
  let index;
  if (typeof action.payload === "string") {
    index = state.sections.findIndex((item) => item.name === action.payload);
    index >= 0
      ? (state.curruntSection = state.sections[index])
      : (state.currentPage = state.sections[0]);
  }
};

// Making about section responsive on mobile.
const menu = (state, action) => {
  if(typeof action.payload === "boolean") state.menu = action.payload;
};
const exports={switch:Switch,menu:menu};
export default exports;
