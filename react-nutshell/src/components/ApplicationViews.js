import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom"
import Home from "./home/Home.js";
import NewsList from "./news/NewsList.js";
import NewsForm from "./news/NewsForm.js"
import NewsCard from "./news/NewsCard.js";
import NewsEditForm from "./news/NewsEditForm"
import EventList from './events/EventList';
import EventForm from './events/EventForm';
import EventDetails from './events/EventDetails';
import EventEditForm from './events/EventEditForm'
import TaskList from "./tasks/TaskList.js"
import TaskForm from "./tasks/TaskForm.js"
import TaskEditForm from "./tasks/TaskEditForm.js"
import CompletedTaskList from "./tasks/CompletedTaskList.js"
import RegisterForm from "./auth/Register.js";
import Login from './auth/Login'

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
          path="/register"
          render={(props) => {
            return <RegisterForm {...props} />;
          }}
        />
        <Route path="/login" component={Login} />

        {/* Events */}

        <Route
          exact
          path="/events"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <EventList {...props} />
            } else {
              return <Redirect to="/login" />
             }
          }}
        />

        <Route
          exact
          path="/events/:eventId(\d+)"
          render={(props) => {
            return (
              <EventDetails
                eventId={parseInt(props.match.params.eventId)}
                {...props}
              />
            );
          }}
        />

        <Route
          path="/events/:eventId(\d+)/edit"
          render={(props) => {
            return <EventEditForm {...props} />;
          }}
        />

        <Route
          path="/events/new"
          render={(props) => {
            return <EventForm {...props} />;
          }}
        />

        {/* EVENTS */}

        {/* News Routes */}
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
        {/* News Routes */}
        <Route
          exact
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
