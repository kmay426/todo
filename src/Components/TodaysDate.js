import React, { Component } from 'react';

 class TodaysDate extends Component {
constructor() {

  const today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  this.state = {
    currentDate: date
  }
}
  render() {
    return (
      <div>
        {this.state.currentDate}
      </div>
    )
  }
}

export default TodaysDate;