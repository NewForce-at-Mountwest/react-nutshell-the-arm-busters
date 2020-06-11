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
    this.state.events.sort((a, b) => { 
      return a.date > b.date ? 1 : -1;
   });

   const monthNames = {
    1:"January", 
    2:"February", 
    3:"March", 
    4:"April", 
    5:"May", 
    6:"June", 
    7:"July", 
    8:"August", 
    9:"September", 
    10:"October", 
    11:"November", 
    12:"December"
}


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
