import classes from "./projects.module.css";
// image is considered as a temporary file until we build the backend and data base.
import devmix from "../../../../assits/devmix.png";
const Item = (props) => {
  return (
    <div className={classes.Container + " col-lg-5 m-1 p-0 overflow-h "}>
      <img src={devmix} alt="" className=" d-block w-100 h-auto p-0" />
      <div className={classes.overlay + " text-left bg-3 opacity-9"}>
        <div className="p-3">
          <h6 className="white">{props.item.projectName}</h6>
          <p className="gray small-1 m-0 p-0 h-100">{props.item.Description}</p>
        </div>
          <div className={classes.slideLinks + " bg-4" }>
            <a
              href={props.item.github}
              className={
                classes.slideLinkIcon + "  p-0 m-0 pr-3 Btn small bi bi-github"
              }
              target="black"
            > <span></span>   </a>
            <a
              href={props.item.website}
              className={
                classes.slideLinkIcon + "  p-0 m-0 pr-3 Btn small fas fa-laptop"
              }
              target="black"
            > <i ></i> </a>
          </div>
      </div>
    </div>
  );
};

export default Item;
