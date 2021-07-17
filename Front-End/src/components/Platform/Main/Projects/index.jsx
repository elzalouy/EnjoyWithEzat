import { Fragment } from "react";
import SelectCategory from './Selector';
import ProjectsList from './ProjectsList';
const ProjectsSection = () => {
  return (
    <Fragment>
    <SelectCategory/>
    <ProjectsList/>
    </Fragment>
  );
};
export default ProjectsSection;
