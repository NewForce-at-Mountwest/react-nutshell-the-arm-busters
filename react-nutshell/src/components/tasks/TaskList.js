import React, { Component } from "react";
//import the components we will need
import TaskCard from "./TaskCard";
import "./TaskList.css"
import TaskManager from "../../modules/TaskManager.js";

class TaskList extends Component {
  //define what this component needs to render
  state = {
    tasks: [],
    loadingStatus: true
  };

  completeTask = (taskProp) => {
    this.setState({loadingStatus : true })

    TaskManager.patchComplete(taskProp)
    .then(() => {
        TaskManager.getAll().then((tasks) => {
            this.setState({
              tasks: tasks,
              loadingStatus: false
            });
          });
    })
  }

  componentDidMount() {
    //getAll from TaskManager and hang on to that data; put it in state
    TaskManager.getAll().then((tasks) => {
      this.setState({
        tasks: tasks,
        loadingStatus: false
      });
    });
  }

  render() {

    let sortedTasks = this.state.tasks.sort((a, b) => a.dueDate > b.dueDate ? 1 : -1)

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            disabled={this.loadingStatus}
            className="task-btn main-task-btn"
            onClick={() => {
              this.props.history.push("/tasks/new");
            }}
          >
            Add Task
          </button>
            <div className="task-container-cards">
              {sortedTasks.map((task) => (
                <TaskCard key={task.id} taskProp={task} completeTask={this.completeTask} {...this.props} />
              ))}
            </div>
        </section>
      </>
    );
  }
}

export default TaskList;
