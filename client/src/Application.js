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
import ReturnButton from "./seatingRender/ReturnButton";

class Application extends Component {
  constructor() {
    super();
    this.state = {
      participants: [],
      toggleGroupOptions: true,
      scrambledParticipantGroup: [],
      numberOfRows: "",
      seatsPerRow: "",
      currentLayoutId: ""
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
    this.postData("http://localhost:8080/api/addLayout", formData).then(data =>
      this.setState({ currentLayoutId: data.id, seatsPerRow: data.seatsPerRow })
    );
  }

  fetchScrambledParticipantGroup() {
    let formData = new FormData();
    formData.append("id", this.state.currentLayoutId);
    return this.postData("http://localhost:8080/api/generate-groups", formData);
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
      <div className="Application">
        <div className="row">
          <div className="col-lg-4 col-sm-12" id="stretch1">
            <LayoutContainer
              addLayout={this.addLayout}
              setRowsAndsSeats={this.changeNumberOfRowsAndSeat}
            />
          </div>
          <div className="col-lg-4 col-sm-12" id="stretch2">
            <ParticipantContainer
              participants={this.state.participants}
              addParticipant={this.addParticipant}
            />
            <ParticipantList participants={this.state.participants} />
          </div>
          <div className="col-lg-4 col-sm-12" id="stretch3">
            <RenderButton showGroupOptions={this.showGroupOptions} />
          </div>
        </div>
      </div>
    );

    const displaySeats = (
      <div>
        <div className="row">
          <SeatingRender
            seatsPerRow={this.state.seatsPerRow}
            participants={this.state.participants}
            fetch={this.fetchScrambledParticipantGroup}
          />
        </div>
        <div className="rowButton">
          <ReturnButton showGroupOptions={this.showGroupOptions} />
        </div>
      </div>
    );
    let groupOptions;
    this.state.toggleGroupOptions
      ? (groupOptions = displayOptions)
      : (groupOptions = displaySeats);

    return <div>{groupOptions}</div>;
  }
}

export default Application;
