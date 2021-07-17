import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import createMockStore from 'redux-mock-store';
import reduxStore from '../../store';
import { UiActions } from '../../store/Ui';
import MainHeader from '../../components/Platform/Main/Header/Header';
import MainHeaderBrief from '../../components/Platform/Main/Header/Brief';
import AboutInfo from '../../components/Platform/About/Info';
import AboutIntro from '../../components/Platform/About/Intro';
import Knowledges from '../../components/Platform/About/Knowlege/Knowledges';
import Progress from '../../components/Platform/About/Progress';
import Social from '../../components/Platform/About/Social';

const mockstore = createMockStore([]);

describe('Platform > Main > Header', () => {

    const store = mockstore({ UI: reduxStore.getState().UI });
    store.dispatch = jest.fn();
    const component = renderer.create(<Provider store={store}><MainHeader /></Provider>);
    test('should be rendered with redux state', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
    test('should handles opening the about menu', () => {
        renderer.act(
            () => component.root.findByType('li').props.onClick()
        );
        expect(store.dispatch).toBeCalledTimes(1);
        expect(store.dispatch).toBeCalledWith(UiActions.Menu(true));
        expect(component.toJSON()).toMatchSnapshot();
    });
    test('should handles changing the comp to Achievments onClick ', () => {
        renderer.act(() => component.root.findByType('button').props.onClick());
        expect(store.dispatch).toBeCalledTimes(1);
        expect(store.dispatch).toBeCalledWith(UiActions.Switch('achievments'));
    })
});

describe('Platofrm > Main > Brief', () => {
    const store = mockstore({ Person: { yearsExperience: 2, completedProjects: 12 } });
    store.dispatch = jest.fn();
    const component = renderer.create(<Provider store={store}><MainHeaderBrief /></Provider>);
    test("should be rendered with redux state", () => {
        expect(component.toJSON()).toMatchSnapshot();
        const yearsExperienceSpan = component.root.findByProps({ id: 'years' }).children;
        const projectsSpan = component.root.findByProps({ id: 'projects' }).children;
        expect(yearsExperienceSpan).toContain(store.getState().Person.yearsExperience.toString());
        expect(projectsSpan).toContain(store.getState().Person.completedProjects.toString());
    });
})

describe('Platofrm > About > Info', () => {
    const store = mockstore({ Person: { country: 'egypt', city: 'Mansoura', birthday: new Date("nov 7 1996").getFullYear() } });
    const component = renderer.create(<Provider store={store}><AboutInfo /></Provider>);
    test("should be rendered with redux state", () => {
        expect(component.toJSON()).toMatchSnapshot();
        const country = component.root.findByProps({ id: 'country' }).children;
        const age = component.root.findByProps({ id: 'age' }).children;
        const city = component.root.findByProps({ id: 'city' }).children;
        expect(country).toContain(store.getState().Person.country);
        expect(age).toContain(((new Date(Date.now()).getFullYear()) - store.getState().Person.birthday).toString());
    });
})

describe('Platofrm > About > Intro', () => {
    const store = mockstore({ Person: { name: 'ezat elzalouy', jobTitle: 'MERN stack developer' } });
    const component = renderer.create(<Provider store={store}><AboutIntro /></Provider>);
    test("should be rendered with redux state", () => {
        expect(component.toJSON()).toMatchSnapshot();
        const name = component.root.findByProps({ id: 'name' }).children;
        const jobTitle = component.root.findByProps({ id: 'jobTitle' }).children;
        expect(name).toContain(store.getState().Person.name);
        expect(jobTitle).toContain(store.getState().Person.jobTitle);
    });
})
describe('Platofrm > About > Knowledges', () => {
    const store = mockstore({
        Person: {
            knowledges: [
                "Node.js, Express.js, Next.js",
                "NoSqlDB, SqlDB, firebase",
                "React.js, Hooks, Redux",
                "Sass, Less, Bootstrap",
                "UML, SCRUM, Agile",
            ]
        }
    });
    const component = renderer.create(<Provider store={store}><Knowledges /></Provider>)
    test("should be renderd with redux state", () => {
        expect(component.toJSON()).toMatchSnapshot();
        const knowledge = component.root.findByProps({ id: store.getState().Person.knowledges[0] }).children[1];
        expect(knowledge).toEqual(store.getState().Person.knowledges[0]);
    })
})

describe('Platofrm > About > Progress', () => {
    const store = mockstore({
        Person: {

            languages: [
                { key: "Arabic", value: 99 },
                { key: "English", value: 85 },
                { key: "Francais", value: 20 },
            ]
        }
    });
    const component = renderer.create(<Provider store={store}><Progress /></Provider>);
    test("Should be rendered with redux store", () => {
        expect(component.toJSON()).toMatchSnapshot();
        const language = component.root.findByProps({ id: store.getState().Person.languages[0].key });
        expect(language).toBeTruthy();
    });
})
describe('Platofrm > About > Social', () => { 
    const store=mockstore({Person:{social:reduxStore.getState().Person.social}});
    const component=renderer.create(<Provider store={store}><Social/></Provider>);
    test("should be rendere with redux state",()=>{
        expect(component.toJSON()).toMatchSnapshot();
        expect(component.root.findByProps({id:store.getState().Person.social.name})).toBeTruthy();
    })
})