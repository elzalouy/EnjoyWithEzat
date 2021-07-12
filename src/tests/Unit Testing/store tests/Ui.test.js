import reducer, { UiActions } from "../../../store/Ui";
import initialState from "../../../store/Ui/initailState";
//Initial State

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
  expect(reducer(initialState, UiActions.Switch("platform"))).toEqual(
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
  expect(reducer(initialState, UiActions.Switch("wrong section name"))).toEqual(
    expect.objectContaining(expected)
  );
});

test("should returns true for menu attribute!... ",()=>{
  expect(reducer(initialState,UiActions.Menu(true))).toEqual(expect.objectContaining({menu:true}))
})

test("it should returns false for menu attribute!...",()=>{
  expect(reducer(initialState,UiActions.Menu('string not boolean'))).toEqual(expect.objectContaining({menu:false}))
})
