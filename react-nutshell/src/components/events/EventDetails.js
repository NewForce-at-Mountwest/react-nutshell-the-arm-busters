import React, { Component } from "react";
import EventManager from "../../modules/EventManager";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Moment from "react-moment"

class EventDetails extends Component {
  isEventId = () => this.state.name !== undefined;
  state = {
    name: "",
    date: "",
    location: "",
    loadingStatus: true,
  };

  componentDidMount() {
    EventManager.get(this.props.eventId).then((event) => {
      this.setState({
        name: event.name,
        date: event.date,
        location: event.location,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    this.setState({ loadingStatus: true });
    EventManager.deleteEvent(this.props.eventId).then(() =>
      this.props.history.push("/events")
    );
  };add
  parsedEvents.sort((a, b) => {          
                if (a.date === b.date) {
                   return parseInt(a.time) - parseInt(b.time);
                }
                return a.date > b.date ? 1 : -1;
             });

  render() {
    return this.isEventId() ? (
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.state.location}
          </Card.Subtitle>
    <Card.Text>  <Moment format="MM/DD/YYYY HH:mm">
               {new Date(this.state.date)}
            </Moment></Card.Text>
          <Button
            variant="danger"
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
            Delete
          </Button>
        
          <Button
            variant="danger"
            type="button"
            onClick={() => {
              this.props.history.push(`/events/${this.props.eventId}/edit`);
            }}
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
    ) : (
      <h1>This event has been cancelled do to the rona.</h1>
    );
  }
}

export default EventDetails;