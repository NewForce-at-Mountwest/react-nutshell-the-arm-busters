import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./home/Home.js";
import TaskList from "./tasks/TaskList.js"
import TaskForm from "./tasks/TaskForm.js"
import TaskEditForm from "./tasks/TaskEditForm.js"

class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/tasks"
          render={(props) => {
            return <TaskList {...props}/>;
          }}
        />
        <Route
          exact
          path="/tasks/new"
          render={(props) => {
            return <TaskForm {...props}/>;
          }}
        />
        <Route
          path="/tasks/:taskId(\d+)/edit"
          render={(props) => {
            return <TaskEditForm {...props} />
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
