import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./ModalExample";
import NestedModal from "./NestedModalExample";
import Alert from "./AlertExample";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Using reactstrap components</h1>
        </header>
        <p />
        <Modal buttonLabel="Click for Modal" />
        <p />
        <NestedModal buttonLabel="Click for Nested Modal" />
        <p />
        <Alert />
      </div>
    );
  }
}

export default App;
