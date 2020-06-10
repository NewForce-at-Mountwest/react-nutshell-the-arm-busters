import React, { Component } from "react"
import TaskManager from "../../modules/TaskManager"
import "./TaskForm.css"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class TaskEditForm extends Component {
    //set the initial state
    state = {
      task: "",
      dueDate: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    handleDateChange = (date) => {
        console.log(date)
        this.setState({
          dueDate: date,
        });
      };

      handleKeyUp = (evt) => {
        if (evt.keyCode == 13) {
          if (
            this.state.task === "" ||
            this.state.dueDate === ""
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
        }
      };

    updateExistingTask = evt => {
        evt.preventDefault();
    if (this.state.task === "" || this.state.dueDate === "" || this.state.dueTime === "") {
        window.alert("Please input something in all three fields");
    } else {
        this.setState({ loadingStatus: true });
        const task = {
            id: this.props.match.params.taskId,
            userId: this.state.userId,
            task: this.state.task,
            dueDate: new Date(this.state.dueDate),
            completed: this.state.completed
        };

        // Create the task and redirect user to task list
        TaskManager.update(task)
        .then(() => this.props.history.push("/tasks"));
    }
};

    componentDidMount() {
      TaskManager.get(this.props.match.params.taskId)
      .then(task => {
          this.setState({
            task: task.task,
            dueDate: new Date(task.dueDate),
            completed: task.completed,
            userId: task.userId,
            loadingStatus: false
          });
      });
    }

    render() {
        return(
            <>
            <div className="task-form">
            <form>
                <fieldset>
                    <div className="task-form">
                        
                    <label htmlFor="task">Task Description</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="task"
                        value={this.state.task}
                        onKeyUp={this.handleKeyUp}
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
                        onClick={this.updateExistingTask}
                        >Submit</button>
                    </div>
                    
                </fieldset>
            </form>
            </div>
        </>
      );
    }
}

export default TaskEditForm