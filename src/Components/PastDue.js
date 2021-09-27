import React, { Component } from 'react'

class PastDue extends Component {
  constructor(props){
    super(props)
  }

dueDateClass() {
  if (this.props.date > Date.now()) {
  return 'not-past-due';
} else {
  if (this.props.date < Date.now())
  return 'past-due'
}
}

  render() {
    return (
      <div 
      className={this.dueDateClass()}
      >
      </div>
    )
  }
}

export default PastDue;

// if todays date is > the due date, then the task should turn red

// date string needs to go back to date object before doing a method 
// run Date.now() in console-see what it returns 