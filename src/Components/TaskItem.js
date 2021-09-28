import React, { Component } from 'react'
import './TaskItem.css';


function isOverDue(date) {
  return Date.now() > Date.parse(date)
  }

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

   overDueClass() {
     if (isOverDue(this.props.date) === true) {
       return 'overdue-task';
     } else {
       return 'not-overdue'
     }
   }
    
  render() {
    const taskItemClass = this.taskItemClass() + ' ' + this.overDueClass();
    console.log(taskItemClass)
    return (
      <div>
        <li
          className={taskItemClass}
          onClick={this.markCompleted}
        >
          {this.props.task}
        </li>
      </div>
    );
  }
}

export default TaskItem;

// create a new folder in the src folder called utility & move the is overDueFunction to its own file, import that function into this file 

// show only the date in red if past due, leaving text in black 

// create functionality to sort this list by duedate - when a button is clicked-the oldest are at the top (ascending order/terms of priority)