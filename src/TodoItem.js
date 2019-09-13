import React, { Component } from 'react';

class TodoItem extends Component {
	
	render() {
		const{ addItem, currentItem, onInputChange } = this.props;
		return (
			<div className="todList">
				<div className="todList-header">
					<form onSubmit={addItem}>
						<input
							type="text"
							placeholder="item"
							value={currentItem.text}
							onChange={onInputChange}
						/>
						<button type="submit">Add Task</button>
					</form>
				</div>
			</div>
		);
	}
}

export default TodoItem;