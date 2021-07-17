import { useSelector } from "react-redux";

const InfoSection = () => {
  const {country,city,birthday}=useSelector(state=>state.Person);
  let age=(new Date(Date.now()).getFullYear())- birthday;
  const style='col-6 pt-2';
  return (
    <div className="row bg-2 white p-0 m-0 pt-4 small">
      <div className={`${style} gray`}>Country:</div>
      <div className={`${style} `} id='country'>{country}</div>
      <div className={`${style} gray`}>City:</div>
      <div className={`${style} `} id='city'>{city}</div>
      <div className={`${style} gray`}>Age:</div>
      <div className={`${style} `} id='age'>{age}</div>
      <div className="col-10 gray line mv-1"></div>
    </div>
  );
};

export default InfoSection;
