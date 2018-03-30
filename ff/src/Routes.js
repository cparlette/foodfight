import React from "react";
import { Route, Switch } from "react-router-dom";
import { Status } from "./App";
import ListUsers from "./ListUsers";
import UserForm from "./UserForm";

export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Status} props={childProps} />
    <Route path="/put" exact component={UserForm} props={childProps} />
    <Route path="/get" exact component={ListUsers} props={childProps} />
  </Switch>;