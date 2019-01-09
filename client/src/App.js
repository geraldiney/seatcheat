import React, { Component } from "react";
import "./css/App.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/scrolling-nav.css";
import "./css/main.css";
import Participant from "./Participant";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Participant />
        
      </div>
    );
  }
}

export default App;
