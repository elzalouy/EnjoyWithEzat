// importing modules
import { useDispatch, useSelector } from "react-redux";
import { UiActions } from "../../../store/Ui/index";
import classes from "./index.module.css";
import Intro from "./Intro";
import Knowledges from "./Knowlege/Knowledges";
import IntroImg from "./IntroImg";
import Info from "./Info";
import SocialLinks from "./Social";
import Progress from "./Progress";
import CV from "./CV";
// Functional Component
const About = () => {
  const dispatch = useDispatch();

  const menuToggle = useSelector((state) => state.UI.menu);

  const handleToggleMenu = () => {
    dispatch(UiActions.menu(false));
  };

  return (
    <div
      className={classes.leftSection + " col-12 col-lg-3 Shadow"}
      style={{ width: menuToggle ? "100%" : "0%" }}
    >
      <div className={classes.header}>
        <div className="d-lg-none gray justify-content-end nav bg-3">
          <li onClick={handleToggleMenu}>
            <i className="text-right fas fa-times cursor gray hover-gold p-3"></i>
          </li>
        </div>
        <div className="row pt-4 bg-3 h-auto ">
          <div className="col-12">
            <IntroImg />
          </div>
          <div className="col-12 mb-3">
            <Intro />
          </div>
        </div>
      </div>
      <div className={classes.leftOverFlowSection + " bg-2"}>
        <Info />
        <div className="row bg-2 white small h-auto">
          <Progress />
          <div className="col-10 gray line mv-1 h-100"></div>
          <Knowledges />
          <CV />
        </div>
      </div>
        <SocialLinks />
    </div>
  );
};

export default About;
