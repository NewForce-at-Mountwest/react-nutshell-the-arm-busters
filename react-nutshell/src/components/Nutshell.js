import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Nutshell.css"
import "react-datepicker/dist/react-datepicker.css";

class Nutshell extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  }
}

export default Nutshell;
