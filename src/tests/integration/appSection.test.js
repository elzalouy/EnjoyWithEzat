import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import createMockStore from 'redux-mock-store';
import AppSection from '../../components/App/appSection';
import reduxStore from '../../store';
const mockstore = createMockStore([]);

describe('App component:-', () => {
    let store, component;
    store = mockstore({ Person: reduxStore.getState().Person, Projects: reduxStore.getState().Projects, UI: reduxStore.getState().UI})
    store.dispatch = jest.fn();
    component = renderer.create(<Provider store={store}><AppSection /></Provider>);
    it('it should render with given state from redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })
})
