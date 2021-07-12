import { Fragment } from "react";
import {BrowserRouter, Switch} from 'react-router-dom'
import "./App.css";
import routes from "./routes";

function App(){
    return(
        <Fragment>
            <BrowserRouter>
            <Switch>{routes.map(item=>item.Route)}</Switch>
            </BrowserRouter>
        </Fragment>
    )
}
export default App;