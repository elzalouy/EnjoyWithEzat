import { Fragment } from "react";
import classes from "./index.module.css";
import Main from "./Main/index";
import AboutSection from './About/index';
const Platform = () => {
  return (
    <Fragment>
      <div className={classes.page}>
        <div className="mx-lg-5 p-lg-2 h-100">
          <div className="row p-0 bg-2 h-100">
            <AboutSection/>
            <Main />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Platform;
