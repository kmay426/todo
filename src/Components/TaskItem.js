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
    if(this.state.completed === true) {
      this.setState({ completed: false})
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
  if(this.state.completed === false)
  return ('task-item')
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