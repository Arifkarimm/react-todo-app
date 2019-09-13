import React, { Component } from 'react';


const SingleTodoList = ({todoItem, deleteItem}) => {
	return(
		<li key={todoItem.key}>
							{todoItem.text}
							<button type="text" onClick={() => deleteItem(todoItem.key)}>Remove</button>
						</li>
	)
}

class TodoList extends Component {
	render() {
		return (
			<div className="todList">
				<ul className="todList-list">
					{this.props.entries.map(item => (
						<SingleTodoList key={item.key} todoItem={item} deleteItem={this.props.deleteItem} />
					))}
				</ul>
			</div>
		);
	}
}



export default TodoList;