import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProgressBar from "../../UIs/progressBar/ProgressBar";
const Progress = () => {
  const { languages } = useSelector((state) => state.Person);
  return (
    <Fragment>
      <div className="row w-100 p-0 m-0">
        <div className="col-12 text-left pb-3">Languages</div>
        {languages.map((lang) => (
          <div className="col-4 p-0 m-0" key={lang.key}>
            <div className="row text-center">
              <ProgressBar value={lang.value} />
              <div className="w-100" id={lang.key}>{lang.key}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-10 gray line mv-1 h-100"></div>
    </Fragment>
  );
};

export default Progress;
