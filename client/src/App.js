import React, { Component } from "react";
import "./css/App.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/scrolling-nav.css";
import "./css/main.css";
import ParticipantContainer from "./participant/ParticipantContainer";
import LayoutContainer from "./layout/LayoutContainer";
import ParticipantList from "./participant/ParticipantList";
import RenderButton from "./seatingRender/RenderButton";
import SeatingRender from "./seatingRender/SeatingRender";

class App extends Component {
  constructor() {
    super();
    this.state = {
      participants: [],
      success: false,
      toggleGroupOptions: true,
      scrambledParticipantGroup: []
    };
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.fetchParticipant = this.fetchParticipant.bind(this);
    this.addLayout = this.addLayout.bind(this);
    this.showGroupOptions = this.showGroupOptions.bind(this);
    this.fetchScrambledParticipantGroup = this.fetchScrambledParticipantGroup.bind(
      this
    );
  }

  componentDidMount() {
    this.fetchParticipant();
  }

  fetchParticipant() {
    this.getData("http://localhost:8080/").then(data =>
      this.setState({ participants: data })
    );
  }

  addParticipant(formData) {
    this.postData("http://localhost:8080/", formData).then(data => {
      this.setState(prevState => ({
        participants: [...prevState.participants, data]
      }));
    });
  }

  addLayout(formData) {
    this.postData("http://localhost:8080/api/addLayout", formData).then(
      this.setState({ success: true })
    );
  }

  fetchScrambledParticipantGroup() {
    console.log("hej från längsta variabelnamnet");
   return this.getData("http://localhost:8080/api/generate-groups")
    // .then(data =>
    //   this.setState({ scrambledParticipantGroup: data })
      
    // );
    // console.log(this.state.scrambledParticipantGroup);
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

  showGroupOptions() {
    this.setState({ toggleGroupOptions: !this.state.toggleGroupOptions });
  }
  render() {
    const displayOptions = (
      <div className="App row">
        <div className="col-sm-4">
          <ParticipantContainer
            participants={this.state.participants}
            addParticipant={this.addParticipant}
          />
        </div>
        <div className="col-sm-4">
          <LayoutContainer addLayout={this.addLayout} />
        </div>
        <div className="col-sm-4">
          <RenderButton showGroupOptions={this.showGroupOptions} />
        </div>
        <div className="row">
          <div className="col">
            <ParticipantList participants={this.state.participants} />
          </div>
        </div>
      </div>
    );

    const displaySeats = (
      <SeatingRender
        participants={this.state.participants}
        fetch={this.fetchScrambledParticipantGroup}
      />
    );
    let groupOptions;
    this.state.toggleGroupOptions
      ? (groupOptions = displayOptions)
      : (groupOptions = displaySeats);

    return <div>{groupOptions}</div>;
  }
}

export default App;
