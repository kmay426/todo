// enter task form component 

import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: ''}
  }

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

  render() {
    return (
      <div className='container'>
        <input
        type='text'
        placeholder='Enter task'
        value= {this.state.value} 
        onChange={this.handleChange}
        >
        </input>
      </div>
    )
  }
}

export default Form;