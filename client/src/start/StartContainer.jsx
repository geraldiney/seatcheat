import React, { Component } from "react";
import LoginContainer from "./LoginContainer";
class StartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <About></About> */}
        <LoginContainer />
      </div>
    );
  }
}

export default StartContainer;
