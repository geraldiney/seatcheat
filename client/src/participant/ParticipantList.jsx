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
              <li>{participant.name}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default ParticipantList;
