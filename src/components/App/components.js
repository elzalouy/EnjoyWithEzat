import Home from "../Home/index";
import Platfrom from "../Platform/index";
import Achievements from "../Achievements/index";
import Awards from "../Awards/Awards";

const Components = [
    { section: "home", content: <Home /> },
    { section: "platform", content: <Platfrom /> },
    { section: "achievements", content: <Achievements /> },
    { section: "Awards&Certifications", content: <Awards /> }
]
export default Components;