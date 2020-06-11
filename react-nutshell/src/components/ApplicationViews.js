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
import RegisterForm from "./auth/Register.js";
import Login from './auth/Login'

class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("userId") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home authProp={this.isAuthenticated()} {...props}/>;
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
            if (this.isAuthenticated()) {
            return (
              <EventDetails
                eventId={parseInt(props.match.params.eventId)}
                {...props}
              />)
            } else {
              return <Redirect to="/login" />
             }
          }}
        />

        <Route
          path="/events/:eventId(\d+)/edit"
          render={(props) => {
            if (this.isAuthenticated()) {
            return <EventEditForm {...props} />;
          } else {
            return <Redirect to="/login" />
           }
          }}
        />

        <Route
          path="/events/new"
          render={(props) => {
            if (this.isAuthenticated()) {
            return <EventForm {...props} />;
          } else {
            return <Redirect to="/login" />
           }
          }}
        />

        {/* EVENTS */}

        {/* News Routes */}
        <Route
          exact
          path="/news"
          render={(props) => {
            if (this.isAuthenticated()) {
            return <NewsList {...props} />;
          } else {
            return <Redirect to="/login" />
           }
          }}
        />
        <Route
          path="/news/new"
          render={(props) => {
            if (this.isAuthenticated()) {
            return <NewsForm {...props} />;
          } else {
            return <Redirect to="/login" />
           }
          }}
        />
        <Route
          exact path="/news/:newsId(\d+)"
          render={(props) => {
            if (this.isAuthenticated()) {
            return <NewsCard newsId={props.match.params.newsId} {...props} />;
          } else {
            return <Redirect to="/login" />
           }
          }}
        />
        <Route
          path="/news/:newsId(\d+)/edit"
          render={(props) => {
            if (this.isAuthenticated()) {
            return <NewsEditForm {...props} />;
          } else {
            return <Redirect to="/login" />
           }
          }}
        />
        {/* News Routes */}
        <Route
          exact
          path="/tasks"
          render={(props) => {
            if (this.isAuthenticated()) {
            return <TaskList {...props} />;
          } else {
            return <Redirect to="/login" />
           }
          }}
        />
        <Route
          exact
          path="/tasks/new"
          render={(props) => {
            if (this.isAuthenticated()) {
            return <TaskForm {...props} />;
          } else {
            return <Redirect to="/login" />
           }
          }}
        />
        <Route
          path="/tasks/:taskId(\d+)/edit"
          render={(props) => {
            if (this.isAuthenticated()) {
            return <TaskEditForm {...props} />
          } else {
            return <Redirect to="/login" />
           }
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews
