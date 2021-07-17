import { useDispatch, useSelector } from "react-redux";
import {PersonActions} from '../../store/Profile'
const AnimateNumber = (props) => {
  const dispatch=useDispatch();
  let state=props.state,element=props.element,start=props.start,duration=props.duration;
  const end=useSelector(state=>state[state][element]);
  let current=start;
  for(i=start;start<end;i++) {
    setInterval(()=>{
      dispatch(PersonActions.setLanguagePercent({element:element,value:start+1}));
    },duration)
  }
  return ( current );
}
 
export default Animate;