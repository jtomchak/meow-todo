import React, { Component } from "react";
import TodoTextInput from "./TodoTextInput";

class Header extends Component {
  render() {
    return (
      <div>
        <TodoTextInput onSave={this.props.addTodo} placeholder="meow what?" />
      </div>
    );
  }
}

export default Header;
