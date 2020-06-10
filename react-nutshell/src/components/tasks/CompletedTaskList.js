import React, { Component } from "react";
//import the components we will need
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

  completeCheck = (sortedCompleteTasks) => {
    if (this.state.completeTasks.length == 0) {
      return <> You have no completed tasks </>;
    } else {
      return (
        <div className="task-container-cards">
          {sortedCompleteTasks.map((task) => (
            <CompletedTaskCard
              key={task.id}
              taskProp={task}
              incompleteTask={this.incompleteTask}
              {...this.props}
            />
          ))}
        </div>
      );
    }
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
    let sortedCompleteTasks = this.state.completeTasks.sort((a, b) =>
      a.dueDate > b.dueDate ? 1 : -1
    );

    return (
      <>
        <section className="section-content">
          <h1 className="task-header-large">Tasks</h1>
          <ul>
            <li>Click "Incomplete" to add a task back to your list</li>
          </ul>
          <button
            type="button"
            disabled={this.loadingStatus}
            className="task-btn main-task-btn"
            onClick={() => {
              this.props.history.push("/tasks");
            }}
          >
            Return to Incomplete Tasks
          </button>
          <h2 className="task-header-large">Completed Tasks</h2>
          <h4 className="task-header-small">
            {this.averageComplete().toFixed(2)}% Completed
          </h4>
          {this.completeCheck(sortedCompleteTasks)}
        </section>
      </>
    );
  }
}

export default TaskList;
