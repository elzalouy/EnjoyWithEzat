import { Fragment } from "react";
import Brief from "./Header/Brief";
import ProjectsSection from './Projects/index'
import Header from "./Header/Header";
import classes from "./index.module.css";
const Main = () => {
  return (
    <Fragment>
      <div className={classes.rightSection + " col-12 col-lg-9"}>
        <div className=" row m-0 p-0 h-auto">
          <Header />
        </div>
        <Brief />
        <ProjectsSection/>
      </div>
    </Fragment>
  );
};
export default Main;