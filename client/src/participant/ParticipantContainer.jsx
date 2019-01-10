import React, { Component } from "react";
import AddParticipants from "./AddParticipants";

class ParticipantContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {

    return (
      <div className="card">
        <AddParticipants
          participants={this.props.participants}
          addParticipant={this.props.addParticipant}
        />
      </div>
    );
  }
}

export default ParticipantContainer;
