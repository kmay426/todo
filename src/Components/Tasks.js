import React, { Component } from 'react';
import { useState } from 'react';

class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = { toDo: 'feed dogs' };
	}

addToDo = () => {
	this.setState({toDo: 'feed cats'});
}

	render() {
		return (
			<div>
				<p>
					{this.state.toDo}
				</p>
				<button
					type='button'
					onClick={this.addToDo}
				>Add task</button>
			</div>
		);
	}
}

export default Tasks;