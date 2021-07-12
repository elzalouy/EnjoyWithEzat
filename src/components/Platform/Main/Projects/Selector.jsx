import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProjectsActions } from "../../../../store/Projects";
import classes from "./projects.module.css";
const   Selector = () => {
  const dispatch = useDispatch();
  const handleFilterItems = (e, type) => {
    dispatch(ProjectsActions.selectProjectsByType(type));
  };
  const { categories, selectedCategory } = useSelector(
    (state) => state.Projects
  );
  return (
    <Fragment>
      <div className="row h-auto mt-5 mx-3 text-left">
        <div className="col-sm-12 m-0 p-0 white medium">PORTFOLIO</div>
        <div className="col-sm-12 m-0 p-0">
          <div className="row text-left justify-content-start w-100">
            <div className=" col-2 Btn m-0 p-0 pt-3 gray bolder-3 small-1">
              filter <i className="fas fa-sort-amount-down-alt"></i>
            </div>
            <ul className={classes.categories + " col-10 text-right "}>
              <li
                className={`Btn m-0 p-2 gray small-2 bg-3 m-1 ${
                  selectedCategory === "all" ? "active-white" : ""
                }`}
                onClick={(e) => handleFilterItems(e, "all")}
              >
                All
              </li>
              {categories.length &&
                categories.map((item) => (
                  <li
                    key={item}
                    className={`Btn m-0 p-2 gray small-2 bg-3 m-1 ${
                      selectedCategory === item ? "active-white" : ""
                    }`}
                    onClick={(e) => handleFilterItems(e, item)}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Selector;
