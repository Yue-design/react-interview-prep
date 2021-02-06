import React, { Component } from "react";
import "./App.css";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("I am a constructor");
  }

  componentWillMount() {
    console.log("Something will mount before rendering");
  }

  componentDidMount() {
    console.log("Something mounted immediately after rendered");
  }

  state = {
    toggle: true
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">React16 LifeCycle Methods</h1>
        {this.state.toggle && <p>Show</p>}
        <button onClick={this.toggle}>Hide</button>
      </div>
    );
  }
}

export default Lifecycle;
