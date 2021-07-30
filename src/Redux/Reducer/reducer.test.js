import reducer from "./reducer";

test("reducers", () => {
  let expectedState = {
    loading: false,
    data: "",
    allUserData: [],
    counter: 1,
    errorMessage: "",
  };
  const state = reducer(undefined, { type: "Increase" });
  expect(state).toEqual(expectedState);
});
