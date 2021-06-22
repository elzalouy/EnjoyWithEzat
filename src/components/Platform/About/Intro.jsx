import { Fragment } from "react";
import { useSelector } from "react-redux";

const Intro = () => {
  const {name,jobTitle}=useSelector(state=>state.Person);
    return ( 
        <Fragment>
        <h6 className="white pt-2">{name}</h6>
          <p className="gray small-1 p-0 m-0">{jobTitle}</p>
        </Fragment>
     );
}
 
export default Intro;