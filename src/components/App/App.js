import { useSelector } from "react-redux";
import { Fragment } from "react";
import Nav from "../NavBar/Nav";
import Home from "../Home/index";
import Platfrom from "../Platform/index";
import Achievements from "../Achievements/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "animejs/lib/anime.es.js";
import "./App.css";

function App() {
  const components = [
     <Home />,
     <Platfrom /> ,
     <Achievements /> 
  ];
  const {curruntSection,sections} = useSelector((state) => state.UI);
  const index=sections.indexOf(section=>section.name===curruntSection.name);
  console.log(index);
  const content=components[index];
  return (
    <Fragment>
    <div className="App h-100">
      <div className="row h-100">
        <div className="align-items-center row">
          <Nav />
        </div>
        <div className="w-100  p-0 m-0 h-100 overflow-h bg-1">{content}</div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
