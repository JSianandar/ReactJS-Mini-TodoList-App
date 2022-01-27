import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={this.removeTodo}
        />
      );
    });
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
