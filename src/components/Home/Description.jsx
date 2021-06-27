import { Fragment } from "react";
import { useSelector } from "react-redux";
const Description = () => {
  // from the store i get my data
    const data=useSelector(state=>state.Person);
  return (
    <Fragment>
      <h4 className='bolder-3'>{data.name}</h4>
      <h5 >{data.jobTitle}</h5>
    </Fragment>
  );
};

export default Description;