import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { ReduxClassComponent } from "./Redux/Components/ReduxClassComponent";
import { ReduxFuncComponent } from "./Redux/Components/ReduxFuncComponent";
import { ReduxBasic } from "./Redux/Components/ReduxBasic";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ReduxBasic} />
      <Route path="/reduxclass" component={ReduxClassComponent} />
      <Route path="/reduxfunc" component={ReduxFuncComponent} />
    </div>
  );
}

export default App;
