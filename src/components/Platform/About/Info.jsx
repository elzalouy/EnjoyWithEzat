import { useSelector } from "react-redux";

const InfoSection = () => {
  const {country,city,birthday}=useSelector(state=>state.Person);
  let age=(new Date(Date.now()).getFullYear())- birthday;
  return (
    <div className="row bg-2 white p-0 pt-4 small h-auto">
      <div className="col-6 pt-2">Country:</div>
      <div className="col-6 pt-2 gray">{country}</div>
      <div className="col-6 pt-2">City:</div>
      <div className="col-6 pt-2 gray">{city}</div>
      <div className="col-6 pt-2">Age:</div>
      <div className="col-6 pt-2 gray">{age}</div>
      <div className="col-10 gray line mv-1"></div>
    </div>
  );
};

export default InfoSection;
