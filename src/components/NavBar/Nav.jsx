import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UiActions } from "../../store/Ui/index";
import classes from "./Nav.module.css";
const Nav = () => {
  const dispatch = useDispatch();

  // Switching between sections
  const sectionToggleHandler = (e,name) => {
    e.preventDefault();
    console.log(name)                                                                                                                                                                                                                                                                                                                                                                               ;
    dispatch(UiActions.switch(name));
  };

  //getting the sections
  const { sections, curruntSection } = useSelector((state) => state.UI);
  const style =
    curruntSection.color === "gold" ? classes.navBlack : classes.navGold;

  return (
    <Fragment>
      <ul className={classes.nav + " Shadow " + style}>
        {sections && sections.map((section) => (
          <li
          key={section.key}
          className={
            classes.navItem + curruntSection.name === section.name
            ? " active"
            : ""
          }
          onClick={e=>sectionToggleHandler(e,section.name)}
          >
            <i className={section.icon}></i>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
export default Nav;