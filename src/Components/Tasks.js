import React from 'react';
import { useState } from 'react';

function Tasks() {
	const toDo = ['feed cats ', 'feed dogs ', 'walk dogs']
	const [tasks, setTasks] = useState(toDo);
	const newToDo = tasks.map(x => <p>{x}</p>)
	console.log(tasks);
	window.setTasks = setTasks;

	return (
		<div>
			{newToDo}
		</div>
	);
}

// convert to class component & dynamically add items to list 

export default Tasks;