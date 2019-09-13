import React, { Component } from 'react';


class TodoList extends Component {
	render() {
		return (
			<div className="todList">
				<ul className="todList-list">
					{this.props.entries.map(item => (
						<li key={item.key}>
							{item.text}
						</li>
					))}
				</ul>
			</div>
		);
	}
}



export default TodoList;