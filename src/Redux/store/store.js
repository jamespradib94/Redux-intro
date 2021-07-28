import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../Reducer/reducer";
import actionWatcher from "../actionWatcher/actionWatcher";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const configureStore = () => {
  let store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  store.runSaga = sagaMiddleware.run(actionWatcher);
  return store;
};
