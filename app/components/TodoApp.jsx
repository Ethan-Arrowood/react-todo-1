var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			todos: [
				{
					id: 1,
					text: 'example 1'
				},
				{
					id: 2,
					text: 'example 2'
				},
				{
					id: 3,
					text: 'example 3'
				},
				{
					id: 4,
					text: 'example 4'
				}
			]
		};
	},
	render: function () {
		var {todos} = this.state;
		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		)
	}
});

module.exports = TodoApp;
