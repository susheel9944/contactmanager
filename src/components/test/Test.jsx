import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("component Did Update...");
  }

  componentWillUnmount() {
    console.log("Component Did UnMount");
  }
  
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}
export default Test;
