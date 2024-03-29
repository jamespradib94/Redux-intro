import { applyMiddleware, createStore, compose,combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "../Reducer/reducer";
import actionWatcher from "../actionWatcher/actionWatcher";

const rootReducer =combineReducers({
  user:userReducer,
})

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const configureStore = () => {
  let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  store.runSaga = sagaMiddleware.run(actionWatcher);
  return store;
};
