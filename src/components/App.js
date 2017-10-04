import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MainSection from "./MainSection";

const App = props => {
  return (
    <div>
      <Header />
      <MainSection todos={props.todos} />
    </div>
  );
};

const mapStatetoProps = state => ({
  todos: state.todos
});

export default connect(mapStatetoProps)(App);
