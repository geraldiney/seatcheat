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
      <div className="">
            <h1>2</h1>

        <AddParticipants
          participants={this.props.participants}
          addParticipant={this.props.addParticipant}
          fetchGroup={this.props.fetchGroup}
        />
      </div>
    );
  }
}

export default ParticipantContainer;
