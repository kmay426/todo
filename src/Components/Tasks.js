import React, { Component } from 'react';
import { useState } from 'react';

class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = { toDo: ['feed dogs ', 'feed cats ', 'walk dogs '] };
	}

	render() {
		const list = this.state.toDo.map((toDo) => <li>{toDo}</li>);
		return (
			<div>
			{list}
			</div>
		);
	}
}

export default Tasks;