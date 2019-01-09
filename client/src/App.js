import React, { Component } from "react";
import "./css/App.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/scrolling-nav.css";
import "./css/main.css";
import ParticipantContainer from './participant/ParticipantContainer';


class App extends Component {



  render() {
    return (
      <div className="App">
        <ParticipantContainer />
      </div>
    );
  }
}

export default App;
