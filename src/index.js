import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "../src/Redux/store/store";
// import { configureStore } from "../src/Redux/store/storeWithPersist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const store = configureStore();
// const { store, persistor } = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router>
    {/* <PersistGate persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
