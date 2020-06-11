import React, { Component } from "react";
//import the components we will need
import EventCard from "./EventCard";
import EventManager from "../../modules/EventManager";
import Button from "react-bootstrap/Button"

class EventList extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    EventManager.getAll().then((events) => {
      this.setState({
        events: events,
      });
    });
  }

  render() {
    // sortedEvent = (a,b) => this.state.date ? 1 : -1
    return (
      <>
          <Button
          variant="outline-dark"
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/events/new");
            }}
          >
            Add Event
          </Button>
          {this.state.events.map((currentEventInLoop) => {
            return (
              <EventCard
              
                key={currentEventInLoop.id}
                eventProp={currentEventInLoop}
              />
            );
          })}
      </>
    );
  }
}

export default EventList;
