import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { todo, completeTodo } = this.props;
    return (
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)}
        />
        <label>{todo.text}</label>
      </div>
    );
  }
}

export default TodoItem;
