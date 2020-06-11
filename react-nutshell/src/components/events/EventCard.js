import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import CardGroup from "react-bootstrap/CardGroup"
import { Link } from "react-router-dom"

class EventCard extends Component {
  render() {
    return (
      <div>
          <CardGroup>
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.eventProp.name}</Card.Title>
            <Link to={`/events/${this.props.eventProp.id}`}>
            <Button variant="danger">Event Details</Button>
            </Link>
          </Card.Body>
        </Card>
        </CardGroup>
      </div>
    );
  }
}

export default EventCard;
