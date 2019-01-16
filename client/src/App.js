import React, { Component } from "react";
import "./css/App.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/scrolling-nav.css";
import "./css/main.css";
import "./css/layout.css";
import "./css/icons.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import StartContainer from "./start/StartContainer";
import Application from "./Application";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">       
        <Route exact path = "/" component = {StartContainer} />
        <Route exact path="/application" component={Application} />
      </div>

      </Router>
    );
  }
}

export default App;
