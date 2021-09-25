// import React, { Component } from 'react'
// import './DateItem.css'

//  class DateItem extends Component {
//    constructor(props){
//      super(props);
//      this.taskComplete = this.taskComplete.bind(this);
//      this.state = { taskCompleted: false }
//    }

//     dateItemClass() {
//     if (this.props.taskItemClass === 'task-item completed') {
//       return 'date-item completed';
//     } else {
//       if (this.props.taskItemClass === 'task-item') {
//         return 'date-item';
//       }
//     }
//   }

//   taskComplete() {
//     if (this.state.taskCompleted === true) {
//       this.setState({ taskCompleted: false })
//     } else {
//       this.setState({ taskCompleted: true })
//     }
//   }
  

//   render() {
//     console.log(this.markCompleted)
//     return (
//       <li
//       className={this.dateItemClass()}
//       onClick={this.props.markCompleted}
//       >{this.props.date}</li>
//     )
//   }
// }

// export default DateItem;