import { useSelector } from "react-redux";
import { Fragment } from "react";
import Nav from "../NavBar/Nav";
import components from './components';
import "bootstrap/dist/css/bootstrap.min.css";
import "animejs/lib/anime.es.js";
import "./App.css";

/* Writing Tests
- Should render the home page with 
*/
function App() {
  const { curruntSection } = useSelector((state) => state.UI);
  const content = components.find(item=>item.section===curruntSection.name).content;
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
