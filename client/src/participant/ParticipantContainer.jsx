import React, { Component } from "react";
import AddParticipants from "./AddParticipants";
import ParticipantList from "./ParticipantList";

class ParticipantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
      isLoading: false
    };
    this.addParticipant = this.addParticipant.bind(this);
  }

  componentDidMount(){
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

  addParticipant(formData){
    
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

  render() {
    return (
      <div>
        <AddParticipants participants={this.state.participants} addParticipant={this.addParticipant}/>
        <ParticipantList participants={this.state.participants}/>
      </div>
    );
  }
}

export default ParticipantContainer;
