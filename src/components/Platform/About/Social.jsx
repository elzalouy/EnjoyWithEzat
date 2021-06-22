import { useSelector } from "react-redux";
import classes from "./index.module.css";
const SocialItems = () => {
  const socialItems = useSelector((state) => state.Person.social);
  return (
      <div className={classes.footer + "  bg-3"}>
        {socialItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={"Btn m-0 p-0"}
            target="blank"
          >
            <i className={  "Btn  gray p-2 m-0 bi " + item.icon}></i>
          </a>
        ))}
      </div>
  );
};

export default SocialItems;
