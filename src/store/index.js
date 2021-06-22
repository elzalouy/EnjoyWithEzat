import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./Ui/index";
import PersonSlice from "./Person/index";
import Projects from './Projects/index'
const store = configureStore({
  reducer: { UI: UiSlice, Person: PersonSlice, Projects: Projects},
});
export default store;
