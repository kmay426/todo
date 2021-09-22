// to do list array of objects

import React, { Component } from 'react';
import './ToDo.css';
import Button from './Button';
import Form from './Form';
import TaskItem from './TaskItem';
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
  
    

    return (
      <div className='container'>
        {this.state.tasks.map((task) => <TaskItem task={task} />)}
        <Form addItem={this.addItem}/>
      </div>
    );
  }
}

export default ToDo;

