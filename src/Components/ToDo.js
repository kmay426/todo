// to do list array of objects

import React, { Component } from 'react';
import './ToDo.css';
import PastDue from './PastDue';
import Form from './Form';
import TaskItem from './TaskItem';

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
        <Form addItem={this.addItem} />
        <PastDue date={this.state.date} />
      </div>
    );
  }
}

export default ToDo;

// mapping -1st argument available is the element and 2nd argument is the index 