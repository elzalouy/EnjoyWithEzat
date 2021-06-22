import {createSlice} from '@reduxjs/toolkit'
import UiinitialState from './initailState';

  /*Part of the store and its related reducers created 
  using one of redux toolkit features called createSlice.*/
  const UiSlice = createSlice({
    name: "UIs",
    initialState: UiinitialState,
    reducers: {
      switch(state, action) {
        const index =state.sections.indexOf(item=>item.name===action.payload);
        console.log(index);
        state.curruntSection=state.sections[index];
      },
      menu(state,action){
        state.menu= action.payload;
      }
    },
  });
  
export const UiActions= UiSlice.actions;
export default UiSlice.reducer;
