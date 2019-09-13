import React, { Component } from 'react';

class TodoItem extends Component {
	componentDidUpdate(){
		this.props.onInputElement.current.focus();
	}
	render() {
		const{ addItem, onInputElement, currentItem, onInputChange } = this.props;
		return (
			<div className="todList">
				<div className="todList-header">
					<form onSubmit={addItem}>
						<input
							type="text"
							placeholder="item"
							ref={onInputElement}
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