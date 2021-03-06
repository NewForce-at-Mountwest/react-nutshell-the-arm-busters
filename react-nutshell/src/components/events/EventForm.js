import React, { Component } from "react";
import EventManager from "../../modules/EventManager";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import DatePicker from "react-datepicker"

// loading status disable the button don't let them click it a million times
class EventForm extends Component {
  state = {
    name: "",
    date: new Date (),
    location: "",
    loadingStatus: false,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  createNewEvent = (evt) => {
    //this stops from loading on page load
    evt.preventDefault();
    if (this.state.name === "" || this.state.date === "") {
      window.alert("Please input all fields");
    } else {
      this.setState({ loadingStatus: true });
      // matches what is in the database
      const eventObject = {
        name: this.state.name,
        date: new Date (this.state.date),
        location: this.state.location,
      };

      EventManager.post(eventObject).then(() =>
        this.props.history.push("/events")
      );
    }
  };

  handleChange = date => {
    this.setState({
      date: date
    });
  };
 

  render() {
    return (
      <>
        <Form>
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={this.handleFieldChange}
            id="name"
            placeholder="Name"
          />
          <Form.Label htmlFor="location">Location of Event</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={this.handleFieldChange}
            id="location"
            placeholder="Location"
          />
          <Form.Label htmlFor="date">Date of Event</Form.Label>
          <DatePicker
          selected={this.state.date}
          onSelect={this.handleSelect} 
          onChange={this.handleChange}
          showTimeSelect
          dateFormat="Pp"
          />
          <div className="alignRight">
            <Button
              variant="danger"
              disabled={this.state.loadingStatus}
              onClick={this.createNewEvent}
            >
              Submit
            </Button>
          </div>
        </Form>
      </>
    );
  }
}

export default EventForm;
