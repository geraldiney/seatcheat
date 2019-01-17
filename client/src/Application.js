import React, { Component } from "react";
import ParticipantContainer from "./participant/ParticipantContainer";
import LayoutContainer from "./layout/LayoutContainer";
import ParticipantList from "./participant/ParticipantList";
import RenderButton from "./seatingRender/RenderButton";
import SeatingRender from "./seatingRender/SeatingRender";
import ReturnButton from "./seatingRender/ReturnButton";
import SaveGroup from "./seatingRender/SaveGroup";

class Application extends Component {
  constructor() {
    super();
    this.state = {
      participants: [],
      toggleGroupOptions: true,
      scrambledParticipantGroup: [],
      numberOfRows: "",
      seatsPerRow: "",
      currentLayoutId: "",
      currentGroup: "4"
    };
    this.getData = this.getData.bind(this);
    this.postData = this.postData.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.fetchParticipant = this.fetchParticipant.bind(this);
    this.addLayout = this.addLayout.bind(this);
    this.showGroupOptions = this.showGroupOptions.bind(this);
    this.fetchScrambledParticipantGroup = this.fetchScrambledParticipantGroup.bind(this);
    this.addGroup = this.addGroup.bind(this);
    this.fetchGroup = this.fetchGroup.bind(this);
  }

  componentDidMount() {
    // this.fetchParticipant();
    this.fetchGroup();
  }

  fetchParticipant() {
    this.getData("http://localhost:8080/").then(data =>
      this.setState({ participants: data })
    );
  }

  fetchGroup() {
    let formData = new FormData();
    formData.append("id", this.state.currentGroup);
    this.state.participants.forEach((item)=>{
      formData.append("participants", item.id);
    });
    this.postData("http://localhost:8080/api/get-group", formData).then(data=>
      this.setState({participants: data})
    );
  }

  addParticipant(formData) {
    this.postData("http://localhost:8080/", formData).then(data => {
      this.setState(prevState => ({
        participants: [...prevState.participants, data]
      }));
    });
  }

  addGroup(formData){
    this.postData("http://localhost:8080/api/addGroup", formData).then(data => {
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
    this.state.participants.forEach((item)=>{
      formData.append("participants", item.id);
    });
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
          <div className="col-lg-4 col-sm-12 stretch1">
            <LayoutContainer
              addLayout={this.addLayout}
              setRowsAndsSeats={this.changeNumberOfRowsAndSeat}
            />
          </div>
          <div className="col-lg-4 col-sm-12 stretch2">
            <ParticipantContainer
              participants={this.state.participants}
              addParticipant={this.addParticipant}
            />
            <ParticipantList participants={this.state.participants} />
          </div>
          <div className="col-lg-4 col-sm-12 stretch3">
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
          <SaveGroup participants={this.state.participants} addGroup={this.addGroup} />
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
