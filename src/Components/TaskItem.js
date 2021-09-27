import React, { Component } from 'react'
import './TaskItem.css';


class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.markCompleted = this.markCompleted.bind(this);
    this.state = { completed: false}
  }

  markCompleted() {
    if (this.state.completed === true) {
      this.setState({ completed: false })
    } else {
      this.setState({ completed: true })
    }
  }

  taskItemClass() {
    if (this.state.completed === true) {
      return 'task-item completed';
    } else {
      if (this.state.completed === false) {
        return 'task-item';
      }
    }
  }

  render() {
    console.log(this.state.completed)
    return (
      <div>
        <li
          className={this.taskItemClass()}
          onClick={this.markCompleted}
        >
          {this.props.task}
        </li>
      </div>
    );
  }
}

export default TaskItem;
