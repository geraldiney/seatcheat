import React, { Component } from "react";
import Login from "./Login";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <Register /> */}
        <Login postData={this.props.postData} />
      </div>
    );
  }
}

export default LoginContainer;
