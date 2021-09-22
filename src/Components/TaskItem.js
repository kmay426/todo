import React, { Component } from 'react'

class TaskItem extends Component {

  render() {
    return (
      <li>{this.props.task}</li> 
    );
  }
}

export default TaskItem;