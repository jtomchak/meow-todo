import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MainSection from "./MainSection";

const App = props => {
  console.log(props.todos);
  return (
    <div>
      <Header />
      <MainSection />
    </div>
  );
};

const mapStatetoProps = state => ({
  todos: state.todos
});

export default connect(mapStatetoProps)(App);
