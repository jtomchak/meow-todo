import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Meow Todos</h1>
          <input placeholder="et tu to do?" />
        </header>
      </div>
    );
  }
}

export default Header;
