import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./home/Home.js";
import EventList from './events/EventList';
import EventForm from './events/EventForm';
import EventDetails from './events/EventDetails';
import EventEditForm from './events/EventEditForm'
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
          
        {/* Events */}

        <Route
          exact
          path="/events"
          render={(props) => {
            return <EventList {...props}/>;
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
          exact
          path="/tasks/completed"
          render={(props) => {
            return <CompletedTaskList {...props}/>;
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
