import Nav from '../../components/NavBar/Nav';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import createMockStore from 'redux-mock-store';
import reduxStore from '../../store';
import { UiActions } from '../../store/Ui';
const mockstore=createMockStore([]);
describe('Nav component:-', () => {
    let store=mockstore({UI:reduxStore.getState().UI,Person:reduxStore.getState().Person});
     store.dispatch=jest.fn();
    let component=renderer.create(<Provider store={store}><Nav/></Provider>);
    it('component should be rendered:-',()=>{
        expect(component.toJSON()).toMatchSnapshot();
    });
    it('should swicth to platform component:-',()=>{
        renderer.act(()=>{
            component.root.findAllByType('li')[1].props.onClick();
        });
        expect(store.dispatch).toBeCalledTimes(1);
        expect(store.dispatch).toBeCalledWith(UiActions.Switch('platform'));
    })
})
