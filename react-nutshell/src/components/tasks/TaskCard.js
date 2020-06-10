import React, { Component } from "react";
import "./TaskCard.css";
import { Link } from "react-router-dom";
import TaskManager from "../../modules/TaskManager.js";

class TaskCard extends Component {
    render() {
    let today = new Date()
    let dueDate = new Date(this.props.taskProp.dueDate);
    let dueDateString = `${dueDate.getMonth() + 1}/${dueDate.getDate()}/${dueDate.getFullYear()}`
    let overdueString = "";
    let overdueHTML = "";

    if (today.getTime() > dueDate.getTime()){
      overdueString = "OVERDUE";
      overdueHTML = "task-overdue"
    }

    return (
      <div className={`task-card ${overdueHTML}`}>
        <div className="task-card-content">
          <h3>
            <Link className="task-link" to={`/tasks/${this.props.taskProp.id}/edit`}>{this.props.taskProp.task}</Link>
          </h3>
          <p>
            Complete by {dueDateString}
          </p>
          <p>{overdueString}</p>
          <button
            type="button"
            className="task-btn"
            onClick={() => this.props.completeTask(this.props.taskProp)}
          >
            Complete
          </button>
        </div>
      </div>
    );
  }
}

export default TaskCard;
