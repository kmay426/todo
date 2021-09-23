import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Error';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className='container'>
        <button
          type='button'
          class='btn btn-secondary'
          onClick={this.props.submit}
        >
          Add item
        </button>
      </div>
    )
  }
}

export default Button;
// mark items as complete by clicking on the item & it should have a strikethrough & color change 
// add hover style to each list item 

