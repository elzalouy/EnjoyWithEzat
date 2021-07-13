import Description from '../../components/Home/Description';
import Social from '../../components/Home/Social';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import createMockStore from 'redux-mock-store';
import reduxStore from '../../store';
const mockstore = createMockStore([]);
describe('Home > Description Section : ', () => {
    let store = mockstore({ Person: { name: 'Ezat Elzalouy', jobTitle: 'MERN stack developer' } })
    let component = renderer.create(<Provider store={store}><Description /></Provider>)
    test('component should be rendered with a state from redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })
});

describe('Home > Social Section', () => {
    let store = mockstore({
        Person: reduxStore.getState().Person
    })
    let component=renderer.create(<Provider store={store}><Social/></Provider>)
    test('component should be rendered with a state from redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })
})