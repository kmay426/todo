//create functional component & add validation for input field

import React from 'react';
import { useState } from 'react';

function FunctionalComp() {
  const [tasks, setTasks] = useState(['feed dogs ', 'feed cats ', 'walk dogs ']);

const list = tasks.map((tasks) => <li>{tasks}</li>)

  // const test = ['this is a test', 'this is also  test']; mapping example
  // const newTest = test.map((test) => <li>{test}</li>)

  return (
    <div>
      {list}
      <input
        type='text'
        value=''
        onChange={event => setTasks(event.target.value)}
      >
      </input>
    </div>
  );
}

export default FunctionalComp;
