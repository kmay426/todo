// to do list array of objects

import React, { Component } from 'react';
import './ToDo.css';
import Form from './Form';
import TaskItem from './TaskItem';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    // this.sortList = this.sortList.bind(this);
    this.state = { tasks: ['Feed dogs', 'Walk dogs', 'Wash car', 'Feed cats'], date: ['2021-10-01 ', '2021-08-02 ', '2021-10-06 ', '2021-10-10 '] }
  }

  addItem(item, date) {
    console.log(date)
    this.setState({ tasks: this.state.tasks.concat(item), date: this.state.date.concat(date) })
  }

  // sortList(event) {
  //   this.date.sort()
  // }

  // need to sort my array prior to mapping, need it sorted by value of date & tasks sorted with it 

  render() {
    const myData = this.state.tasks.concat(this.state.date);
    console.log(myData) //sorted tasks then dates at bottom/did not sort by date
    this.state.date.sort()  // this.state.date.sort() is sorting the dates how we want
    return (
      <div className='container'>
        <button
          type='button'
          class='btn btn-primary'
          onClick={this.sortList}
        >
          Sort
        </button>
        {this.state.tasks.map((task, idx) => <TaskItem task={task}
          // + ' ' + this.state.date[idx]} 
          date={this.state.date[idx]}
        />)}
        {/* {this.state.date.sort()} */}
        <Form addItem={this.addItem} />
      </div>
    );
  }
}

export default ToDo;

// mapping -1st argument available is the element and 2nd argument is the index 

// start with adding a button onclick will make it sort the list-items earliest due at the top 