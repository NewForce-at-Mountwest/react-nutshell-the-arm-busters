import React, { Component } from "react";
import "./Home.css"

class Home extends Component {
  logoutUser = () => {
    localStorage.clear("userId");
    this.props.history.push("/");
  };

  isAuthenticated = () => localStorage.getItem("userId") !== null;

  checkLogoutButton = () => {
    if (this.isAuthenticated()) {
      return (
        <button
        className="home-btn"
          type="button"
          onClick={() => {
            this.logoutUser();
          }}
        >
          Attempt to Leave sHell
        </button>
      );
    } else {
      return (
        <>
          <button
          className="home-btn"
            type="button"
            onClick={() => {
              this.props.history.push("/login");
            }}
          >
            You're stuck here. Login.
          </button>
          <button
          className="home-btn"
            type="button"
            onClick={() => {
              this.props.history.push("/register");
            }}
          >
            No acccount? No problem.
          </button>
        </>
      );
    }
  };

  render() {
    return (
      <section className="home-card">
        <h2 className="home-header-large">Welcome to the Second Circle of sHell</h2>
        <br />
        {this.checkLogoutButton()}
      </section>
    );
  }
}

export default Home;
