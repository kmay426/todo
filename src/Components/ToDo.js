// to do list array of objects

import React, { Component } from 'react';
import './ToDo.css';
import Button from './Button';
import Form from './Form';
import TaskItem from './TaskItem';
import DateItem from './DateItem';
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = { tasks: ['Feed dogs', 'Walk dogs', 'Wash car', 'Feed cats'], date: ['2021-10-01 ', '2021-10-02 ', '2021-10-06 ', '2021-10-10 '] }
  }

  addItem(item, date) {
    console.log(date)
    this.setState({ tasks: this.state.tasks.concat(item), date: this.state.date.concat(date) })
  }

  render() {
    console.log(this.state.tasks, this.state.date)
    return (
      <div className='container'>
        {this.state.tasks.map((task, idx) => <TaskItem task={task + ' ' + this.state.date[idx]} />)}
        {/* {this.state.date.map((date, idx) => <DateItem date={date}  />)} */}
        <Form addItem={this.addItem} />
      </div>
    );
  }
}

// checking off taskitem-date needs to show as checked off (index)

export default ToDo;

