import React, { Component } from 'react'

class Error extends Component {
  constructor(props) {
    super(props);
  }

errorMessage() {
  if(this.props.showError === true)
  return (
    <div>
      Please add text.
    </div>
  )
}

  render() {
    return(
      <div>
        {this.errorMessage()}
        </div>
  )
}
}

export default Error;

// need and error message to display when my input field is an emptry string and the submit button is clicked

