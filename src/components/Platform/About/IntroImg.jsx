import classes from "./index.module.css";
import profileImg from "../../../assits/profile.jpg";
const InfoImg = () => {
    // it needs to be connected to Back-end service
    return ( 
    <img src={profileImg} className={classes.profileImg} alt="" />
   );
}
 
export default InfoImg;