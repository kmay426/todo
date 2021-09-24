import React, { Component } from 'react'
import './DateItem.css'

 class DateItem extends Component {
   constructor(props){
     super(props);
     this.taskComplete = this.taskComplete.bind(this);
     this.state = { taskCompleted: false }
   }

    dateItemClass() {
    if (this.state.taskCompleted === true) {
      return 'date-item completed';
    } else {
      if (this.state.taskCompleted === false) {
        return 'date-item';
      }
    }
  }

  taskComplete() {
    if (this.state.taskCompleted === true) {
      this.setState({ taskCompleted: false })
    } else {
      this.setState({ taskCompleted: true })
    }
  }
  

  render() {
    return (
      
      <li
      className={this.dateItemClass()}
      onClick={this.taskComplete}
      >{this.props.date}</li>
    )
  }
}

export default DateItem;