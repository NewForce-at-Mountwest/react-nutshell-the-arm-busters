import React, { Component } from "react";
//import the components we will need
import TaskCard from "./TaskCard";
import CompletedTaskCard from "./CompletedTaskCard";
import "./TaskList.css";
import TaskManager from "../../modules/TaskManager.js";

class TaskList extends Component {
  //define what this component needs to render
  state = {
    incompleteTasks: [],
    completeTasks: [],
    loadingStatus: true,
  };

  completeTask = (taskProp) => {
    this.setState({ loadingStatus: true });

    TaskManager.patchComplete(taskProp).then(() => {
      TaskManager.getAll().then((tasks) => {
        this.setState({
          incompleteTasks: tasks,
          loadingStatus: false,
        });
        TaskManager.getAllCompleted().then((tasks) => {
          this.setState({
            completeTasks: tasks,
            loadingStatus: false,
          });
        });
      });
    });
  };

  incompleteTask = (taskProp) => {
    this.setState({ loadingStatus: true });

    TaskManager.patchIncomplete(taskProp).then(() => {
      TaskManager.getAll().then((tasks) => {
        this.setState({
          incompleteTasks: tasks,
          loadingStatus: false,
        });
        TaskManager.getAllCompleted().then((tasks) => {
          this.setState({
            completeTasks: tasks,
            loadingStatus: false,
          });
        });
      });
    });
  };

  averageComplete = () => {
    let numberIncomplete = this.state.incompleteTasks.length;
    let numberComplete = this.state.completeTasks.length;
    let numberTotal = numberIncomplete + numberComplete;
    return (numberComplete / numberTotal) * 100;
  };

  averageIncomplete = () => {
    let numberIncomplete = this.state.incompleteTasks.length;
    let numberComplete = this.state.completeTasks.length;
    let numberTotal = numberIncomplete + numberComplete;
    return (numberIncomplete / numberTotal) * 100;
  };

  componentDidMount() {
    //getAll from TaskManager and hang on to that data; put it in state
    TaskManager.getAll().then((tasks) => {
      this.setState({
        incompleteTasks: tasks,
      });
      TaskManager.getAllCompleted().then((tasks) => {
        this.setState({
          completeTasks: tasks,
          loadingStatus: false,
        });
      });
    });
  }

  render() {
    let sortedTasks = this.state.incompleteTasks.sort((a, b) =>
      a.dueDate > b.dueDate ? 1 : -1
    );
    let sortedCompleteTasks = this.state.completeTasks.sort((a, b) =>
      a.dueDate > b.dueDate ? 1 : -1
    );

    return (
      <>
        <section className="section-content">
          <h1 className="task-header-large">Tasks</h1>
          <ul>
            <li>Click "Add Task" to create a new task</li>
            <li>Click "View Completed" to view your list of Completed tasks</li>
            <li>Click on a task name to edit that task</li>
            <li>Click "Complete" to add a task to your Completed list</li>
          </ul>
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
          <br />
          <button
            type="button"
            disabled={this.loadingStatus}
            className="task-btn main-task-btn"
            onClick={() => {
              this.props.history.push("/tasks/completed");
            }}
          >
            View Completed
          </button>
          <h2 className="task-header-large">Incomplete Tasks</h2>
          <h4 className="task-header-small">
            {this.averageIncomplete().toFixed(2)}% Incomplete
          </h4>
          <div className="task-container-cards">
            {sortedTasks.map((task) => (
              <TaskCard
                key={task.id}
                taskProp={task}
                completeTask={this.completeTask}
                {...this.props}
              />
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default TaskList;
