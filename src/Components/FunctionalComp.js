//create functional component & add validation for input field

import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function FunctionalComp() {
  const [tasks, setTasks] = useState(['feed dogs ', 'feed cats ', 'walk dogs']);
  const [value, setValue] = useState({value: ''})

  const list = tasks.map((tasks) => <li>{tasks}</li>)

  // const test = ['this is a test', 'this is also  test']; mapping example
  // const newTest = test.map((test) => <li>{test}</li>)

  function handleSubmit() {
    console.log('you submitted a task')
  };

  function handleChange() {
    console.log('you are typing')
  }

  return (
    <div>
      {list}
      <input
        type='text'
        value=''
        required
        onChange={handleChange}
      >
      </input>
      <div>
        <button
          type='button'
          class="btn btn-dark"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div >
  );
}

export default FunctionalComp;
