import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Home from "./home/Home.js";
import NewsList from "./news/NewsList.js";
import NewsForm from "./news/NewsForm.js"
import NewsCard from "./news/NewsCard.js";

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
            return <NewsList {... props} />;
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
            console.log("this is props from application views", props);
            return (
              <NewsCard animalId={props.match.params.newsId} {...props} />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
