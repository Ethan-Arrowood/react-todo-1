var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
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
	handleAddTodo: function (text) {
		alert('new todo: ' + text);
	},
	render: function () {
		var {todos} = this.state;
		return (
			<div>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
});

module.exports = TodoApp;
