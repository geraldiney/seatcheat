import React, { Component } from "react";

class ParticipantList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <h5 className="card-title">Namn: </h5>
        <ul className="list-group list-group-flush">
          {this.props.participants.map(participant => (
            <div key={participant.id}>
              <li>{participant.name} {participant.participantRole===null ? "":", "+participant.participantRole}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default ParticipantList;
