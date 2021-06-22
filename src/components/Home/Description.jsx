import { Fragment } from "react";
import { useSelector } from "react-redux";
const Description = () => {
  // from the store i get my data
    const data=useSelector(state=>state.Person);
  return (
    <Fragment>
      <h1>{data.name}</h1>
      <h5>{data.jobTitle}</h5>
    </Fragment>
  );
};

export default Description;