import React, { Component } from 'react'
import Button from './Button';
import Error from './Error';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.resetValue = this.resetValue.bind(this);
    this.submit = this.submit.bind(this);
    this.pickDate = this.pickDate.bind(this)

    const date = new Date();

// date objects

    this.state = { value: '', showError: false, date: date.toISOString().substring(0, 10), }
  }

// to ISO string - string functions to out the parts of the date we don't want 

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  resetValue() {
    this.setState({ value: '', date: 'mm/dd/yyyy' });
  }

  submit(event) {
    console.log(this.state.date)
    if (this.state.value !== '') {
      this.props.addItem(this.state.value, this.state.date)
      this.setState({ showError: false })
      this.resetValue();
    } else {
      if (this.state.value === '') {
        this.setState({ showError: true });
      }
    }
  }

  pickDate(event) {
    this.setState({ date: event.target.value })
  }

  render() {
    console.log(this.state.currentDateTime)
    return (
      <div className='container'>
        <input
          type='text'
          placeholder='Enter task'
          value={this.state.value}
          onChange={this.handleChange}
        >
        </input>
        <input
          type='date'
          onChange={this.pickDate}
          value={this.state.date}   // year day month 
        >
        </input>
        <div className='container'>
          <Button
            addItem={this.props.addItem}
            resetValue={this.resetValue}
            value={this.state.value}
            submit={this.submit}
          />
          <Error
            showError={this.state.showError}
            value={this.state.value}
          />
        </div>
        <p>{this.state.currentDateTime}</p>
      </div>
    )
  }
}

export default Form;
