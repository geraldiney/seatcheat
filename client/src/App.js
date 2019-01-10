import React, { Component } from "react";
import "./css/App.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/scrolling-nav.css";
import "./css/main.css";
import ParticipantContainer from "./participant/ParticipantContainer";
import LayoutContainer from "./layout/LayoutContainer";

class App extends Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
  }

  getData(url) {
    return fetch(url).then(response => response.json());
  }

  postData(url, formData) {
    return fetch(url, {
      method: "POST",
      body: formData
    }).then(response => response.json());
  }
  render() {
    return (
      <div className="App row">
        <div className="col-sm-4">
          <ParticipantContainer getData={this.getData} postData={this.postData} />
        </div>
        <div className="col-sm-4">
          <LayoutContainer postData={this.postData}/>
        </div>
      </div>
    );
  }
}

export default App;
