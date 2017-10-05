import React, { Component } from "react";

class TodoTextInput extends Component {
  state = {
    text: ""
  };

  handleSubmit = event => {
    const text = event.target.value.trim();
    if (event.which === 13) {
      this.props.onSave(text);
      this.setState({ text: "" });
    }
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <input
        placeholder="et tu to do?"
        value={this.state.text}
        autoFocus="true"
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default TodoTextInput;
