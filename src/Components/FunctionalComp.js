//create functional component & add validation for input field

import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function FunctionalComp() {
  const [tasks, setTasks] = useState(['feed dogs ', 'feed cats ', 'walk dogs']);
  const [value, setValue] = useState('');
  const [ifSubmit, setIfSubmit] = useState(false)
  const newTask = tasks.map((task) => <li>{task}</li>);

  function submit() {
    setIfSubmit(true);
    if (value != '') {
      setTasks(tasks.concat(value));
    }
  };

  function change(event) {
    setValue(event.target.value)
  }

  function error() {
    if (value === '' && ifSubmit) {    //invalid 
      return (
        <p>Error: You must enter text</p>
      )
    }
  }

  return (
    <div>
      {newTask}
      <input
        type='text'
        value={value}
        onChange={change}
      >
      </input>

      {error()}

      <div>
        <button
          type='button'
          //disabled={!value}
          class="btn btn-dark"
          onClick={submit}
        >
          Submit
        </button>
      </div>
    </div >
  );
}

export default FunctionalComp;

// repeat this on a classic component: disabled button, error message display, text remove from input after submit
