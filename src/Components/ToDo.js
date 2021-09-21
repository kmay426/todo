// to do list array of objects

import React, { Component } from 'react';
import './ToDo.css';
import Button from './Button';
import Form from './Form';
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = { tasks: ['Feed dogs', 'Walk dogs', 'Wash car', 'Feed cats'] }
  }

addItem(item) {
  this.setState({tasks: this.state.tasks.concat(item)})
}

  render() {

    const newTask = this.state.tasks.map((tasks) => <li>{tasks}</li>);

    return (
      <div
        className='container'>
        {newTask}
        <Form
        addItem={this.addItem}/>
      </div>
    );
  }
}

export default ToDo;

// tasks should be own component taking prop of each task item 
