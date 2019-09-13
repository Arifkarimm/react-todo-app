import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		return (
			<div className="todList">
				<div className="todList-header">
					<form>
						<input
							type="text"
							placeholder="item"
						/>
						<button type="submit">Add Task</button>
					</form>
				</div>
			</div>
		);
	}
}

export default TodoItem;