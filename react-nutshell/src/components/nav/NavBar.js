import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"

class NavBar extends Component {
  render() {
    return (
      <header>
        <Navbar bg="danger" variant="dark">
          <Navbar.Brand href="#home">Nutshell</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/tasks">Tasks</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default NavBar;
