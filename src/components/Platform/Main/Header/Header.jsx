import { useDispatch } from "react-redux";
import { UiActions } from "../../../../store/Ui/index";
import classes from "../index.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleSectionToggle=()=>{
    dispatch(UiActions.Switch('achievments'));
  }
  const handleMenuToggle =  ()=> {
    dispatch(UiActions.Menu(true));
  };
  
  return (
    <div className={classes.rightSectionHeader + " col-12 justify-content-start align-items-start"}>
      <div className={classes.backCover + " col-lg"}></div>
      <div className={classes.HeaderData + " col-12 p-0"}>
        <div className="d-lg-none text-left justify-content-start nav p-3 m-0">
          <li onClick={handleMenuToggle}>
            <i className="fas fa-bars cursor gray hover-gold"></i>
          </li>
        </div>
        <div className={classes.header + " col-12"}>
          <div className="row justify-content-start text-left align-items-center mx-lg-5">
            <div className="col-12 m-0 p-0">
              <h1 className="bolder-1 large-1 my-4">
                Discover my Amazing Art Space!
              </h1>
              <button className="Btn px-4 py-2 border-0 bgGold" onClick={handleSectionToggle}>EXPOLRE NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
