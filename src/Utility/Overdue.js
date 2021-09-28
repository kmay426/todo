import React, { Component } from "react";

class isOverdue extends Component {
  constructor(props){
    super();
  }

isOverdue(date) {
  return Date.now() > Date.parse(date)
  }

  overDueClass() {
    if (isOverdue(this.props.date) === true) {
      return 'overdue-task';
    } else {
      return 'not-overdue'
    }
  }
}
