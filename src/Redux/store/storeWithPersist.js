import { applyMiddleware, createStore, compose,combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "../Reducer/reducer";
import actionWatcher from "../actionWatcher/actionWatcher";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer =combineReducers({
  user:userReducer
})

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  store.runSaga = sagaMiddleware.run(actionWatcher);
  let persistor = persistStore(store);
  return {store,persistor};
};
