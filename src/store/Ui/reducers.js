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
const Menu = (state, action) => {
  if(typeof action.payload === "boolean") state.menu = action.payload;
};

// input error
const inputError=(state,action)=>{
  if(typeof action.payload === 'string' ) state.error=action.payload;
}
const exports={Switch,Menu,inputError};
export default exports;
