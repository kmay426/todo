// add item button 

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { submitted: false }
    this.submit = this.submit.bind(this);

  }

  submit(event) {
    if (this.props.value !== '') {
      this.props.addItem(this.props.value)
    }
    this.setState({ submitted: true });
    this.props.resetValue();
  };

  errorMessage() {
    console.log(this.state.submitted)
    if (this.props.value === '' && this.state.submitted === true) {
      return (
        <div>
          Please add text.
        </div>
      );
    }
  }

  render() {
    console.log(this.props.value)
    return (
      <div
        className='container'>
        <button
          type='button'
          class='btn btn-secondary'
          onClick={this.submit}
        >
          Add item
        </button>
        {this.errorMessage()}
      </div>
    )
  }
}

export default Button;

// input clear on submit 
// fix error message 
// error message is its own component/use props for when it should/shouldn't display 