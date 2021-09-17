import React, { Component } from 'react';
import './Tasks.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state = { toDo: ['feed dogs ', 'feed cats ', 'walk dogs '], value: '', submitted: false };
		this.submit = this.submit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	submit() {
		if (this.state.value != '') {
		this.setState({
			toDo: this.state.toDo.concat(this.state.value), value: '',
		})
	}};


	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	//want error to display if button is clicked & there is no text in the input to add to the list

	errorMessage() {
		if (this.state.value === '' && this.state.submitted) {
			return (
				<p>Error!</p>
			)
		}
	}

	render() {
		const list = this.state.toDo.map((toDo) => <li>{toDo}</li>);

		return (
			<div>
				<div className='list'>
					{list}
					<input
						onChange={this.handleChange}
						type='text'
						name='add item'
						placeholder='enter task'
						value={this.state.value}
					>
					</input>
				</div>
				<button
					onClick={this.submit}
					type='button'
					class="btn btn-dark"
				//disabled={!this.state.value}
				>
					Add Item
				</button>
			</div>
		);
	}
}






export default Tasks;