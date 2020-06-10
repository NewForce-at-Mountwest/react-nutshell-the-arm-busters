import React, { Component } from "react";
import EventManager from "../../modules/EventManager";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker"

class EventEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    date: new Date(),
    location: "",
    loadingStatus: true,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingEvent = (evt, date) => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedEvent = {
      id: this.props.match.params.eventId,
      name: this.state.name,
      date: date,
      location: this.state.location,
    };
    EventManager.updateEvent(editedEvent).then(() =>
      this.props.history.push("/events")
    );
  };
  // handleChange = date => {
  //   this.setState({
  //     date: date
  //   });
  // };

  // taco = {}

  componentDidMount() {
    EventManager.get(this.props.match.params.eventId).then((event) => {
      // this.taco.photo = book.photo
      // this.taco.available = book.available
      this.setState({
        name: event.name,
        date: new Date(event.date),
        location: event.location,
        loadingStatus: false,
      });
    });
  }
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
            value={this.state.name}
          />
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={this.handleFieldChange}
            id="location"
            value={this.state.location}
          />
          <Form.Label>Date</Form.Label>
          <DatePicker
            selected={this.state.date}
            onSelect={this.handleSelect} //when day is clicked
            onChange={this.handleChange}
            showTimeSelect
            dateFormat="Pp" //only when value has changed
          />
          <Button
          variant="danger"
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.updateExistingEvent}
          >
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default EventEditForm;
