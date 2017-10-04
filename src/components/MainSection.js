import React, { Component } from "react";
import classnames from "classnames";

class MainSection extends Component {
  render() {
    const todoItems = this.props.todos.map(todo => (
      <li
        className={classnames({
          completed: todo.completed
        })}
      >
        {todo.text}
      </li>
    ));
    return (
      <section className="main">
        <ul className="todo-list">{todoItems}</ul>
      </section>
    );
  }
}

export default MainSection;
