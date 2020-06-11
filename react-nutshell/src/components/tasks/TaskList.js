import React, { Component } from "react";
//import the components we will need
import TaskCard from "./TaskCard";
import "./TaskList.css";
import TaskManager from "../../modules/TaskManager.js";

class TaskList extends Component {
  //define what this component needs to render
  state = {
    allTasks: [],
    completeTasks: [],
    loadingStatus: true,
  };

  completeTask = (taskProp) => {
    this.setState({ loadingStatus: true });

    TaskManager.patchComplete(taskProp).then(() => {
      TaskManager.getAll().then((tasks) => {
        this.setState({
          allTasks: tasks,
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
          allTasks: tasks,
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
    let numberComplete = this.state.completeTasks.length;
    let numberTotal = this.state.allTasks.length;
    if (numberTotal != 0) {
      return (numberComplete / numberTotal) * 100;
    } else {
      return 100;
    }
  };

  componentDidMount() {
    //getAll from TaskManager and hang on to that data; put it in state
    TaskManager.getAll().then((tasks) => {
      this.setState({
        allTasks: tasks,
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
    let sortedTasks = this.state.allTasks.sort((a, b) =>
      a.dueDate > b.dueDate ? -1 : 1
    );
    sortedTasks = sortedTasks.sort((a, b) =>
      a.completed > b.completed ? 1 : -1
    );

    return (
      <>
        <section className="section-content">
          <h1 className="task-header-large">Tasks</h1>
          <ul>
            <li>Click "Add Task" to create a new task</li>
            <li>Click on a task name to edit that task</li>
            <li>Click "Complete" to mark a task as Completed</li>
            <li>Click "Incomplete" to mark a task as Incomplete</li>
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
          <h2 className="task-header-large">Incomplete Tasks</h2>
          <h4 className="task-header-small">
            {this.averageComplete().toFixed(2)}% Completed
          </h4>
          <div className="task-container-cards">
            {sortedTasks.map((task) => (
              <TaskCard
                key={task.id}
                taskProp={task}
                completeTask={this.completeTask}
                incompleteTask={this.incompleteTask}
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
