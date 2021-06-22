import { useDispatch } from "react-redux";
import {PersonActions} from '../../../../store/Projects/index';
const Selector = () => {
  const dispatch=useDispatch();
  const handleFilterItems= (e)=> {
    console.log(e.type);
    // dispatch(PersonActions.selectProjectsByType(e.type))
  }
    return (
        <div className="row h-auto mt-5 mx-4 text-left">
        <div className="col-sm-2 m-0 p-0 white medium">PORTFOLIO</div>
        <div className="col-sm-10 m-0 p-0 nav justify-content-end">
          <li className="Btn m-0 p-1 gray small-2" onClick={handleFilterItems({type:'Web Development'})}>Web Development</li>
          <li className="Btn m-0 p-1 gray small-2" onClick={handleFilterItems({type:'Software Engineering'})}>Software Engineering</li>
          <li className="Btn m-0 p-1 gray small-2" onClick={handleFilterItems({type:'Education'})}>Education</li>
          <li className="Btn m-0 p-1 gray small-2" onClick={handleFilterItems({type:"Software EngineeringGuid"})}>Guides</li>
        </div>
      </div>
     );
}
 
export default Selector;