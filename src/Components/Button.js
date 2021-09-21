import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Error';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { showError: false }
    this.submit = this.submit.bind(this);

  }

  submit(event) {
    if (this.props.value !== '') {
      this.props.addItem(this.props.value)
    }

    if (this.props.value === '') {
      this.setState({ showError: true });
    }

    if (this.props.value !== '') {
      this.props.resetValue();
    }

  };

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
        <Error
          value={this.props.value}
          showError={this.state.showError}
        />
      </div>
    )
  }
}

export default Button;

// fix error message 
// error message is its own component/use props for when it should/shouldn't display 