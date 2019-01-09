import React, { Component } from "react";
import AddParticipants from "./AddParticipants";
import ParticipantList from "./ParticipantList";
import SeatingRender from "../seatingRender/SeatingRender";

class ParticipantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
      isLoading: false,
      renderSeats: false
    };
    this.addParticipant = this.addParticipant.bind(this);
    this.renderSeat = this.renderSeat.bind(this);
  }

  componentDidMount() {
    this.fetchParticipant();

  }
  fetchParticipant() {
    fetch("http://localhost:8080/")
      .then(response => response.json())
      .then(data => {
        this.setState({ participants: data, isLoading: false });
        console.log(data);
      });
  }

  addParticipant(formData) {

    fetch("http://localhost:8080/", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(prevState => ({
          participants: [...prevState.participants, data]
        }));
      });

  }


  renderSeat() {
    this.setState({
      renderSeats: !this.state.renderSeats
    })
  }




  render() {
    let seats = null;

    if (this.state.renderSeats) {
        seats = (
          <SeatingRender participants={this.state.participants} />
        )
      }
    

    return (
      <div>
        <AddParticipants participants={this.state.participants} addParticipant={this.addParticipant} />
        <ParticipantList participants={this.state.participants} />
        {/* <SeatingRender participants={this.state.participants}/> */}
        {seats}
        <button className="btn" onClick={this.renderSeat}>Render</button>
      </div>
    );
  }
}

export default ParticipantContainer;
