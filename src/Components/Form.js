import React, { Component } from 'react'
import Button from './Button';
import Error from './Error';
class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.resetValue = this.resetValue.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { value: '', showError: false }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  resetValue() {
    this.setState({ value: '' });
  }

  submit(event) {
    if (this.state.value !== '') {
      this.props.addItem(this.state.value)
      this.setState({ showError: false })
      this.resetValue();
    } else {
      if (this.state.value === '') {
        this.setState({ showError: true });
      }
    }
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
            resetValue={this.resetValue}
            value={this.state.value}
            submit={this.submit}
          />
          <Error
            showError={this.state.showError}
            value={this.state.value}
          />
        </div>
      </div>
    )
  }
}

export default Form;