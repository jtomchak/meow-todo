import React, { Component } from "react";

class Header extends Component {
  handleSubmit = event => {
    const text = event.target.value.trim();
    if (event.which === 13) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <div>
        <header className="header">
          <h1>Meow Todos</h1>
          <input placeholder="et tu to do?" onKeyDown={this.handleSubmit} />
        </header>
      </div>
    );
  }
}

export default Header;
