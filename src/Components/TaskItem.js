import React, { Component } from 'react'
import './TaskItem.css';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.markCompleted = this.markCompleted.bind(this);
    this.state = { completed: false }
  }

  markCompleted() {
    this.setState({ completed: true })
  }

  //function that determines the class based on state 

  taskItemClass() {
   if (this.state.completed === true) {
      return 'task-item completed';
    } else {
      return 'task-item';
    }
  }

  render() {
    console.log(this.state.completed)
    return (
      <li
        className={this.taskItemClass()}
        onClick={this.markCompleted}
      >
        {this.props.task}
      </li>
    );
  }
}

export default TaskItem;

// click to remove strikethrough 
// add due date to tasks 10/1/21   selecting a calendar 
// list should display name & date it's due 
// if past due-display in red 