// to do list array of objects

import React, { Component } from 'react';
import './ToDo.css';
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: ['test', 'other test']}
  }
  render() {

    const newTask = this.state.tasks.map((tasks) => <li>{tasks}</li>);

    return (
      <div className='container'>
        {newTask}
      </div>
    );
  }
}

export default ToDo;
