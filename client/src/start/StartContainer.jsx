import React, { Component } from "react";
import LoginContainer from "./LoginContainer";
import Register from "./Register";



class StartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-4 col-sm-12 stretch1">
            <div className="test"></div>
          </div>
          <div className="col-lg-4 col-sm-12 stretch2">
            <Register />
          </div>
          <div className="col-lg-4 col-sm-12 stretch3">
            <LoginContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default StartContainer;
