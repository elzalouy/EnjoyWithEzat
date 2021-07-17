import { Fragment } from "react";
import Description from "./Description";
import classes from "./home.module.css";
import Social from "./Social";
import TopContent from "./TopContent";
const Index = (props) => {
  return (
    <Fragment>
      {/* 
      -Most of these classes belongs to Bootstrap, read more about it first
      - something like 'classes.home' it's just a css class
       inside a module called home.module.css that i built .
       -TopContent -> src/components/Home/TopContent.jsx module
       -Description -> src/components/Home/Description.jsx module
       -Socail -> src/components/Home/Socail.jsx
      */}
      <div className={classes.home}>
        <div className="row">
          <div className="container h-100">
            <TopContent />
            <div className="col-sm-12 h-100">
              <div className="row m-0 p-0 h-100 align-items-center">
                <div className={classes.centerItem}>
                  <Description />
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
