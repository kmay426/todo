import React, { Component } from 'react'
import './TaskItem.css';
import { isOverDue } from '../Utility/isOverDue';
class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.markCompleted = this.markCompleted.bind(this);
    this.state = { completed: false }
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
    // const taskItemClass = this.taskItemClass()
    //   + ' ' + this.overDueClass();
    // console.log(taskItemClass)

    return (
      <div>
        <li
          className={this.taskItemClass()}
          onClick={this.markCompleted}
        >
          {this.props.task} &nbsp;
          <span
            className={this.overDueClass()}
          >
            {this.props.date}
          </span>
        </li>
      </div>
    );
  }
}

export default TaskItem;

// create functionality to sort this list by duedate - when a button is clicked-the oldest are at the top (ascending order/terms of priority)

// start with adding a button onclick will make it sort the list-items earliest due at the top 