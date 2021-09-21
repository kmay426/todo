import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Error';

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

  // errorMessage() {
  //   console.log(this.state.submitted)
  //   if (this.props.value === '' && this.state.submitted === true) {
  //     return (
  //       <div>
  //         Please add text.
  //       </div>
  //     );
  //   }
  // }

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
        {/* needs to show error if the value is an empty string and the submit button is pressed */}
        <Error
          value={this.props.value}
          submitted={this.state.submitted}
        />
        {/* {this.errorMessage()} */}
      </div>
    )
  }
}

export default Button;

// fix error message 
// error message is its own component/use props for when it should/shouldn't display 