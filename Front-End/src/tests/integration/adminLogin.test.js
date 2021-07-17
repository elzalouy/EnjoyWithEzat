/**
 * 1- React-test-renderer
 * This package provides a React renderer that can be used to render React components to pure JavaScript objects, 
 * without depending on the DOM or a native mobile environment.
 * 2- Snapshot
 * Basically a Snapshot Test creates a snapshot 
 * -- which is stored in a separate file -- of your rendered component's output when you run your test.
 *  This snapshot is used for diffing it to the next snapshot when you run your test again.
 *  If your rendered component's output has changed, the diff of both snapshots will show it and the Snapshot Test will fail.
 */

import React from 'react';
import { Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import createMockStore from 'redux-mock-store';
import AdminLogin from '../../components/Admin/AdminLogin';
import { AdminActions } from '../../store/Admin';

const mockstore=createMockStore([]);
describe('Admin login component',()=>{
    let store,component;
        store=mockstore({Admin:{email:'',password:"",role:"",name:"ezat",onLoginError:''}});
        store.dispatch=jest.fn();
        component=renderer.create(<Provider store={store}><AdminLogin/></Provider>);  
    it('it should render with given state from redux store',()=>{
        expect(component.toJSON()).toMatchSnapshot();
    });
    it('it should call dispatch',()=>{
         renderer.act(()=>{
            component.root.findByProps({name:'email',id:'email',type:'email'}).props.onChange({target:{value:"eza",name:"email"}});
        })
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenNthCalledWith(1,AdminActions.onLoginError("\"email\" is not allowed to be empty"));
        expect(store.dispatch).toHaveBeenLastCalledWith(AdminActions.onHandleChange({element:"email",value:"eza"}));
    });
});


