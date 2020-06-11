import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./home/Home.js";
import NewsList from "./news/NewsList.js";
import NewsForm from "./news/NewsForm.js"
import NewsCard from "./news/NewsCard.js";
import NewsEditForm from "./news/NewsEditForm"
import TaskList from "./tasks/TaskList.js"
import TaskForm from "./tasks/TaskForm.js"
import TaskEditForm from "./tasks/TaskEditForm.js"
import CompletedTaskList from "./tasks/CompletedTaskList.js"

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
          path="/news"
          render={(props) => {
            return <NewsList {...props} />;
          }}
        />
        <Route
          path="/news/new"
          render={(props) => {
            return <NewsForm {...props} />;
          }}
        />
        <Route
          exact path="/news/:newsId(\d+)"
          render={(props) => {
            return <NewsCard newsId={props.match.params.newsId} {...props} />;
          }}
        />
        <Route
          path="/news/:newsId(\d+)/edit"
          render={(props) => {
            return <NewsEditForm {...props} />;
          }}
        />
        <Route
          path="/tasks"
          render={(props) => {
            return <TaskList {...props} />;
          }}
        />
        <Route
          exact
          path="/tasks/new"
          render={(props) => {
            return <TaskForm {...props} />;
          }}
        />
        <Route
          exact
          path="/tasks/completed"
          render={(props) => {
            return <CompletedTaskList {...props} />;
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

export default ApplicationViews
