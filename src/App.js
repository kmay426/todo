import './App.css';
import Tasks from './Components/Tasks';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunctionalComp from './Components/FunctionalComp';
import Home from './Components/Home';
import ToDo from './Components/ToDo';
import Form from './Components/Form';

function App() {
  
  return (
    <div>
      <Home />
      <ToDo />
      <Form />
     </div>
  );
}

export default App;
