import React, { Component } from "react";
import "./TaskCard.css";
import { Link } from "react-router-dom";

class TaskCard extends Component {
    render() {
    let today = new Date()
    let dueDate = new Date(this.props.taskProp.dueDate);
    let dueDateString = `${dueDate.getMonth() + 1}/${dueDate.getDate()}/${dueDate.getFullYear()}`
    let overdueString = "";
    let overdueHTML = "";

    if (today.getTime() > dueDate.getTime()){
      overdueString = (<h5 className="task-link">OVERDUE</h5>);
      overdueHTML = "task-overdue"
    }

    if(this.props.taskProp.completed == false){
          return (
      <div className={`task-card ${overdueHTML}`}>
        <div className="task-card-content">
          <h3>
            <Link className="task-link" to={`/tasks/${this.props.taskProp.id}/edit`}>{this.props.taskProp.task}</Link>
          </h3>
          <p>
            Complete by {dueDateString}
          </p>
          {overdueString}
          <button
            type="button"
            className="task-btn"
            onClick={() => this.props.completeTask(this.props.taskProp)}
          >
            Mark as Completed
          </button>
        </div>
      </div>
    );
          }
          else{
            return (
              <div className="task-card-completed">
                <div className="task-card-content">
                  <h3>{this.props.taskProp.task}</h3>
                  <h5>COMPLETED</h5>
                  <button
                    type="button"
                    className="task-btn-completed"
                    onClick={() => this.props.incompleteTask(this.props.taskProp)}
                  >
                    Mark as Incomplete
                  </button>
                </div>
              </div>
            );
          }
  }
}

export default TaskCard;
