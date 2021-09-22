import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Error';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { showError: false }
    this.submit = this.submit.bind(this);

  }

  // submit(event) {
  //   if (this.props.value !== '') {
  //     this.props.addItem(this.props.value)
  //     // this.props.resetValue();
  //     this.setState({ showError: false })
  //   } else {
  //     this.setState({ showError: true });
  //   }

  // };

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

// move error rendering to form component 
// mark items as complete by clicking on the item & it should have a strikethrough & color change 
// add hover style to each list item 

