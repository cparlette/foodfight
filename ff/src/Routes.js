import React from "react";
import { Route, Switch } from "react-router-dom";
import { Status } from "./App";
import ListUsers from "./ListUsers";
import UserForm from "./UserForm";

export default () =>
  <Switch>
    <Route path="/" exact component={Status} />
    <Route path="/put" exact component={UserForm} />
    <Route path="/get" exact component={ListUsers} />
  </Switch>;