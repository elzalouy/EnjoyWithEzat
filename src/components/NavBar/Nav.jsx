import React ,{ Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UiActions } from "../../store/Ui";
import classes from "./Nav.module.css";

const Nav= () => { 
  const dispatch = useDispatch();
  // Switching between sections
  const sectionToggleHandler = (e, name) => {
    dispatch(UiActions.Switch(name));
  };

  //getting the sections
  const { sections, curruntSection } = useSelector((state) => state.UI);
  const style =
    curruntSection.color === "gold" ? classes.navBlack : classes.navGold;
  return (
    <Fragment>
      <ul className={classes.nav + " Shadow " + style}>
        {sections && 
          sections.map((section) => (
            <li
              key={section.key}
              className={
                classes.navItem +
                (section.key === curruntSection.key ? " active" : "")
              }
              onClick={(e) => sectionToggleHandler(e, section.name)}
            >
              <i className={section.icon}></i>
            </li>
          ))}
      </ul>
    </Fragment>
  );
};
export default Nav;