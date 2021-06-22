import { useSelector } from "react-redux";
import ProgressBar from "../../UIs/progressBar/ProgressBar";
const Progress = () => {
  const {languages} = useSelector(state=>state.Person);
  return (
    <div className="row w-100 justify-content-center align-items-center">
      <div className="col-12 text-left ph-2 pb-3">Languages</div>
      {
      languages.map((lang) => (
        <div className="col-3 p-0 m-0 text-center justify-content-center align-items-center w-100" key={lang.key}>
          <ProgressBar value={lang.value}/>
          <div className="text-left w-100">{lang.key}</div>
        </div>
      ))
      }
    </div>
  );
};

export default Progress;
