// My to do list header

import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='col col-3'>
        <h1 className='header'>My to do list:</h1>
        </div>
      </div>
    );
  }
}

export default Home;
