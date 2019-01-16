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
        <div className="row relativeContainer">

          <div className="col-lg-4 col-sm-12 stretch1">
            <div className="spacer" />
            <h5>SeatCheat</h5>
            <div className="loggatext" />
            <div className="loggatext2" />
          </div>
          <div className="col-lg-4 col-sm-12 stretch2">
            <Register />
          </div>
          <div className="col-lg-4 col-sm-12 stretch3">
            <LoginContainer />
          </div>
        </div>

        <div className="citat">
          <h2>"Skapa bordsplacering enkelt med SeatCheat!"</h2>
        </div>
      </div>
    );
  }
}

export default StartContainer;
