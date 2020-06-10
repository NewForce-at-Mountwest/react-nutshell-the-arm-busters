import React, { Component, useState } from "react";
import TaskManager from "../../modules/TaskManager";
import "./TaskForm.css";
import "./TaskList.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class TaskForm extends Component {
  state = {
    task: "",
    dueDate: new Date(),
    loadingStatus: false,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleDateChange = (date) => {
    console.log(date);
    this.setState({
      dueDate: date,
    });
  };

  handleKeyUp = (evt) => {
    if (evt.keyCode == 13) {
      if (this.state.task === "" || this.state.dueDate === "") {
        window.alert("Please input something in all three fields");
      } else {
        this.setState({ loadingStatus: true });
        const task = {
          userId: 3,
          task: this.state.task,
          dueDate: this.state.dueDate,
          dueTime: this.state.dueTime,
          completed: false,
        };

        // Create the task and redirect user to task list
        TaskManager.post(task).then(() => this.props.history.push("/tasks"));
      }
    }
  };

  /*  Local method for validation, set loadingStatus, create task      object, invoke the TaskManager post method, and redirect to the full task list
   */
  constructNewTask = (evt) => {
    evt.preventDefault();
    if (
      this.state.task === "" ||
      this.state.dueDate === "" ||
      this.state.dueTime === ""
    ) {
      window.alert("Please input something in all three fields");
    } else {
      this.setState({ loadingStatus: true });
      const task = {
        userId: 3,
        task: this.state.task,
        dueDate: this.state.dueDate,
        dueTime: this.state.dueTime,
        completed: false,
      };

      // Create the task and redirect user to task list
      TaskManager.post(task).then(() => this.props.history.push("/tasks"));
    }
  };

  render() {
    return (
      <>
        <div className="task-form">
          <form>
            <fieldset>
              <div className="task-form">
                <h3 className="task-header">Add a New Task</h3>
                <label htmlFor="task">Task Description</label>
                <input
                  type="text"
                  required
                  onChange={this.handleFieldChange}
                  onKeyUp={this.handleKeyUp}
                  id="task"
                  placeholder="Description of task"
                />
                <br />
                <label htmlFor="dueDate">Due Date</label>
                <DatePicker
                  id="dueDate"
                  selected={this.state.dueDate}
                  onChange={this.handleDateChange}
                />
                <br />
                <button
                  className="task-btn"
                  type="button"
                  disabled={this.state.loadingStatus}
                  onClick={this.constructNewTask}
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </>
    );
  }
}

export default TaskForm;
