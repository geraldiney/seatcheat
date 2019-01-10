import React, { Component } from "react";

class AddParticipants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: this.props.participants,
      newParticipantName: ""
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
  }

  clickHandler(event) {
    let formData = new FormData();
    formData.append("name", this.state.newParticipantName);
    this.props.addParticipant(formData);
    this.setState({ newParticipantName: "" });
    event.preventDefault();
  }

  textHandler(event) {
    this.setState({ newParticipantName: event.target.value });
  }

  render() {
    return (
      <div className="Participants">
        <h5 className="card-title">Lägg till deltagare!</h5>
        <form>
          <input
            type="textarea"
            placeholder="Enter participant"
            value={this.state.newParticipantName}
            onChange={this.textHandler}
          />
          <button className="btn" onClick={this.clickHandler}>Lägg till</button>
        </form>
      </div>
    );
  }
}

export default AddParticipants;
