import React, { Component } from 'react'

class Error extends Component {
  constructor(props) {
    super(props);
  }

  errorMessage() {
    if (this.props.showError === true)
      return (
        <div>
          Please add text.
        </div>
      )
  }

  render() {
    return (
      <div>
        {this.errorMessage()}
      </div>
    )
  }
}

export default Error;


