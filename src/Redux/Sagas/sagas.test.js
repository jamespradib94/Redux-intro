import { runSaga } from "redux-saga";
import { getAllUsersSaga, getDataSaga } from "./sagas";
import * as actions from "../actions/actions";
import mockStore from "./mockStore";

describe("ProjectSagas", () => {
  afterEach(() => {
    mockStore.clearActions();
  });

    it("It should call getDataSaga", () => {
      actions.getDataAction = jest.fn(() => ({}));
      runSaga(mockStore, getDataSaga, {});
      const expectedAction = [
        { loading: true, type: "Loading" },
        { type: "Save_Data", value: { } },
        { loading: false, type: "Loading" },
      ];
      expect(mockStore.getActions()).toEqual(expectedAction);
    });
  it("It should call getDataSaga when api throws error", () => {
    actions.getDataAction = jest.fn(() => {
      throw new Error("error");
    });
    runSaga(mockStore, getDataSaga, {});
    const expectedAction = [
      { loading: true, type: "Loading" },
      { loading: false, type: "Loading" },
      {type: "Error",value: "No data found"},
    ];
    expect(mockStore.getActions()).toEqual(expectedAction);
  });
});
