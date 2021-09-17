import './App.css';
import Tasks from './Components/Tasks';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunctionalComp from './Components/FunctionalComp';

function App() {
  
  return (
    <div className='container'>
      <h1>My to do list: </h1>
      {/* <Tasks /> */}
      <Tasks />
     
    </div>
  );
}

export default App;
