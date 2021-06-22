import { useSelector } from "react-redux";

const Brief = () => {
  const {yearsExperience,completedProjects}=useSelector(state=>state.Person);
  return (
    <div className="row mt-lg-0 pt-lg-0 mt-5 pt-2 h-auto">

      <div className="col-sm-3 col-6 small white p-sm-1 mt-5">
        <span className="gold bolder  medium"> {yearsExperience} + </span> Years Experience
      </div>
      <div className="col-sm-3 col-6 small white p-sm-1 mt-5">
        <span className="gold bolder  medium"> {completedProjects} </span> Completed Projects
      </div>
    </div>
  );
};

export default Brief;
