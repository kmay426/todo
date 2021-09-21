import React, { Component } from 'react'

class Error extends Component {
  constructor(props) {
    super(props);
  }

errorMessage() {
  if(this.props.submitted === true && this.props.value === '')
  return (
    <div>
      Please add text.
    </div>
  )
}

  render() {
    console.log(this.props.submitted)
    return(
      <div>
        {this.errorMessage()}
        </div>
  )
}
}

export default Error;