import reducer, { UiActions } from "../../../store/Ui";
//Initial State
const initialState = {
  curruntSection: {
    key: 0,
    name: "home",
    color: "gold",
    icon: "bi bi-person",
  },
  menu: false,
  sections: [
    { key: 0, name: "home", color: "gold", icon: "bi bi-person" },
    {
      key: 1,
      name: "platform",
      color: "black",
      icon: "bi bi-file-earmark-richtext",
    },
    { key: 2, name: "achievments", color: "black", icon: "fas fa-tasks" },
    {
      key: 3,
      name: "Awards&Certifications",
      color: "black",
      icon: "fas fa-award",
    },
  ],
};

test("should return the initial state!", () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test("should return platform as a currentSection!..", () => {
  const expected = {
    curruntSection: {
      color: "black",
      icon: "bi bi-file-earmark-richtext",
      key: 1,
      name: "platform",
    },
  };
  expect(reducer(initialState, UiActions.switch("platform"))).toEqual(
    expect.objectContaining(expected)
  );
});

test("should return home as a currentSection!..", () => {
  const expected = {
    curruntSection: {
      key: 0,
      name: "home",
      color: "gold",
      icon: "bi bi-person",
    },
  };
  expect(reducer(initialState, UiActions.switch("wrong section name"))).toEqual(
    expect.objectContaining(expected)
  );
});

test("should returns true for menu attribute!... ",()=>{
  expect(reducer(initialState,UiActions.menu(true))).toEqual(expect.objectContaining({menu:true}))
})

test("it should returns false for menu attribute!...",()=>{
  expect(reducer(initialState,UiActions.menu('string not boolean'))).toEqual(expect.objectContaining({menu:false}))
})
