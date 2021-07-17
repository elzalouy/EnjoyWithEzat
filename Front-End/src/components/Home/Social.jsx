import { Fragment } from "react";
import { useSelector } from "react-redux";

const Social = () => {
  // I'm here calling the store from redux to get the data i need. It could be editable someday.
  const social = useSelector((state) => state.Person.social);
  return (
    <Fragment>
      {social.map((item) => (
        <a key={item.name} href={item.link} target="blank">
          <i className={"col-1 p-2 bi " + item.icon}></i>
        </a>
      ))}
    </Fragment>
  );
};

export default Social;