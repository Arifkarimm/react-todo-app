import React, { Component } from 'react';


class TodoList extends Component {
	render() {
		return (
			<div className="todList">
				<ul className="todList-list">
					{this.props.entries.map(item => (
						<li key={item.key}>
							{item.text}
							<button type="text" onClick={() => this.props.deleteItem(item.key)}>Remove</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}



export default TodoList;