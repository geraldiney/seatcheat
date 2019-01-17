import React, { Component } from "react";
import LoginContainer from "./LoginContainer";
import Register from "./Register";
import LoggaMini from "../img/LoggaMini.png";

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
            <img className="logga" src={LoggaMini} />
            {/* <div className="loggatext" /> */}
            {/* <div className="loggatext2" /> */}
            <div className="citat-mobil show-xs">
              <h2>"Skapa bordsplacering enkelt med SeatCheat!"</h2>
              <div className="arrow" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 stretch2">
            <LoginContainer />
          </div>
          <div className="col-lg-4 col-sm-12 stretch3">
            <Register />
          </div>
        </div>

        <div className="citat hide-xs">
          <h2>"Skapa bordsplacering enkelt med SeatCheat!"</h2>
        </div>
      </div>
    );
  }
}

export default StartContainer;
