import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./Ui/index";
import PersonSlice from "./Profile/index";
import Projects from './Projects/index'
import Admin from "./Admin/index";
const store = configureStore({
  reducer: { UI: UiSlice, Person: PersonSlice, Projects: Projects, Admin : Admin },
});
export default store;