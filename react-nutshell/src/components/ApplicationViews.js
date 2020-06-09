import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./home/Home.js";
import EventList from './events/EventList';
import EventForm from './events/EventForm';
import EventDetails from './events/EventDetails';
import EventEditForm from './events/EventEditForm'

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

      </React.Fragment>
    );
  }
}

export default ApplicationViews;
