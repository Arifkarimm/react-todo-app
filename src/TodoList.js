import React from 'react';


const SingleTodoList = ({todoItem, deleteItem}) => {
	return(
		<li key={todoItem.key}>
			{todoItem.text}
			<button type="text" onClick={() => deleteItem(todoItem.key)}>Remove</button>
		</li>
	)
}


const TodoList = ({ entries, deleteItem }) => (
		<div className="todList">
				<ul className="todList-list">
					{entries.map(item => (
						<SingleTodoList key={item.key} todoItem={item} deleteItem={deleteItem} />
					))}
				</ul>
		</div>
	)

export default TodoList;