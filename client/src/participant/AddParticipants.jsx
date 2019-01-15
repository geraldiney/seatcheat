import React, { Component } from "react";

class AddParticipants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: this.props.participants,
      newParticipantName: "",
      newParticipantRole:""
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    this.optionHandler=this.optionHandler.bind(this);
  }

  clickHandler(event) {
    let formData = new FormData();
    formData.append("name", this.state.newParticipantName);
    formData.append("role", this.state.newParticipantRole);
    this.props.addParticipant(formData);
    this.setState({ newParticipantName: "", newParticipantRole: "" });
    event.preventDefault();
  }

  textHandler(event) {
    this.setState({ newParticipantName: event.target.value });
  }
  optionHandler(event) {
    this.setState({newParticipantRole:event.target.value});
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="Participants">
        <h5 className="card-title">Lägg till deltagare!</h5>
        <form>
          <input
            type="textarea"
            placeholder="Lägg till deltagare"
            value={this.state.newParticipantName}
            onChange={this.textHandler}
          />
          <label htmlFor="hej1">Roll</label><br />
          <select name="role" onChange={this.optionHandler}>
          <option value="NA">N/A</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Tester">Tester</option>
            <option value="ProductOwner">Product owner</option>
            <option value="UX">UX</option>
          </select>
          <button className="btn" onClick={this.clickHandler}>Lägg till</button>
        </form>
      </div>
    );
  }
}

export default AddParticipants;
