import { useSelector } from 'react-redux';
import Item from './ProjectItem'
const List = () => {
    // Listing the projects
    const {selectedProjects}= useSelector(state=>state.Projects);
    return ( 
        <div className="row h-auto justify-content-center align-items-start mx-3">
          {selectedProjects.map(item=><Item item={item} key={item.id}/>)}
      </div>
     );
}
 
export default List;
