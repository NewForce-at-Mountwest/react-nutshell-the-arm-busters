import React, { Component } from "react";
import EventManager from "../../modules/EventManager";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
  };
//   handleArchive = () => {
//     this.setState({ loadingStatus: true });
//     EventManager.archiveEvent(this.props.eventId).then(() =>
//       this.props.history.push("/events")
//     );
//   };

  render() {
    return this.isEventId() ? (
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.state.location}
          </Card.Subtitle>
          <Card.Text>{this.state.date}</Card.Text>
          <Button
          variant="danger"
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
            Delete
          </Button>
          {/* <Button
          variant="danger"
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleArchive}
          >
            Archive
          </Button> */}
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
