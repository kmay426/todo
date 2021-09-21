// enter task form component 

import React, { Component } from 'react'
import Button from './Button';
class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.resetValue = this.resetValue.bind(this);
    this.state = { value: '' }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  resetValue() {
    this.setState({value: ''});
   }


  render() {
    console.log(this.state.value)
    return (
      <div className='container'>
        <input            
          type='text'
          placeholder='Enter task'
          value={this.state.value}
          onChange={this.handleChange}
        >
        </input>
        <div className='container'>
          <Button
            addItem={this.props.addItem}
            value={this.state.value}
            resetValue={this.resetValue}
          />
        </div>
      </div>
    )
  }
}

export default Form;