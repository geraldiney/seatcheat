import React, { Component } from "react";
import "./css/App.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/scrolling-nav.css";
import "./css/main.css";
import ParticipantContainer from "./participant/ParticipantContainer";
import LayoutContainer from "./layout/LayoutContainer"

class App extends Component {
  render() {
    return (
      <div className="App row">
      
      <div className="col-sm-4"><ParticipantContainer /></div> 
      <div className="col-sm-4"><LayoutContainer /></div> 
       <div className="col-sm-4"><ParticipantContainer /></div> 
        
      </div>
    );
  }
}

export default App;
