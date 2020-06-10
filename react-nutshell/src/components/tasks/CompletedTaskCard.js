import React, { Component } from "react";
import "./TaskCard.css";
import { Link } from "react-router-dom";

class TaskCard extends Component {
  render() {
    return (
      <div className="task-card">
        <div className="task-card-content">
          <h3 className="task-link">{this.props.taskProp.task}</h3>
          <button
            type="button"
            className="task-btn"
            onClick={() => this.props.incompleteTask(this.props.taskProp)}
          >
            Incomplete
          </button>
        </div>
      </div>
    );
  }
}

export default TaskCard;
