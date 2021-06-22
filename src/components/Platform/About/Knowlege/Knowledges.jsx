import { Fragment } from "react";
import { useSelector } from "react-redux";

const Knowledges = () => {
  const knowledges = useSelector((state) => state.Person.knowledges);
  return (
    <Fragment>
          <div className="row text-left w-100">
            <div className="col-12 text-left ph-2 pb-3">Knowledge</div>
            {knowledges && knowledges.map((item) => (
              <div className="col-12 text-left ph-2 pb-2 gray" key={item}>
                <i className="fas fa-check small-2 bolder gold pr-2"></i>
                {item}
              </div>
            ))}
          </div>
          <div className="col-10 gray line mv-1"></div>
    </Fragment>
  );
};

export default Knowledges;
