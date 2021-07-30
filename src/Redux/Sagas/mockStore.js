import configureStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);
const store = mockStore({});

export default store;
