import {Route,Redirect} from 'react-router-dom';
import AdminLogin from '../Admin/AdminLogin';
import appSection from './appSection';
const routes=[
    {
        route:'/',
        Route:<Route path='/' key='hi' exact  component={appSection}/>
    },
    {
        route:'/admin',
        Route:<Route path='/admin' key='admin' component={AdminLogin}/>
    },
    {
        Route:<Redirect to='/' exact key='to/'/>
    }
]
export default routes;