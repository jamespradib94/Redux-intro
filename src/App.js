import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import "./App.css";
import { ReduxClassComponent } from "./Redux/Components/ReduxClassComponent";
import { ReduxFuncComponent } from "./Redux/Components/ReduxFuncComponent";
import { ReduxBasic } from "./Redux/Components/ReduxBasic";

function App() {
  return (
    <div className="App">
      <Switch>    
      <Route path="/reduxclass" component={ReduxClassComponent} />
      <Route path="/reduxfunc" component={ReduxFuncComponent} />
      <Route path="/reduxbasic" component={ReduxBasic} />
      <Route path="/">
      <Redirect push to="/reduxbasic" />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
