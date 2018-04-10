import React from "react";
import { Route, Switch } from "react-router-dom";
import { Status } from "./App";
import ListUsers from "./ListUsers";
import UserForm from "./UserForm";
import Login from "./Login";
import AppliedRoute from "./AppliedRoute";
import Signup from "./Signup";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Status} props={childProps} />
    <AppliedRoute path="/put" exact component={UserForm} props={childProps} />
    <AppliedRoute path="/get" exact component={ListUsers} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
  </Switch>;