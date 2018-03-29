import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserForm, Square, Status } from "./App";

export default () =>
  <Switch>
    <Route path="/" exact component={Status} />
    <Route path="/put" exact component={UserForm} />
    <Route path="/get" exact component={Square} />
  </Switch>;