import React, { Component } from "react";

class AddParticipants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      participants: this.props.participants,
      newParticipantName: "",
      newParticipantRole: "NA",
      savedGroup: ""
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    this.optionHandler = this.optionHandler.bind(this);
    this.optionHandler2 = this.optionHandler2.bind(this);
  }

  clickHandler(event) {
    let formData = new FormData();
    formData.append("name", this.state.newParticipantName);
    formData.append("role", this.state.newParticipantRole);
    this.props.addParticipant(formData);
    this.setState({ newParticipantName: "", newParticipantRole: "NA" });
    event.preventDefault();
  }

  textHandler(event) {
    this.setState({ newParticipantName: event.target.value });
  }
  optionHandler(event) {
    this.setState({ newParticipantRole: event.target.value });
  }
  optionHandler2(event){
    this.props.fetchGroup(event.target.value);
  }

  render() {
    return (
      <div className="Participants">
        <h5 className="">Deltagare</h5>
        <section className="padding">
          <div className="testparent">
            <div className="test">
              <div className="person" />
              <div className="head" />
            </div>
            <div className="test">
              <div className="person" />
              <div className="head" />
            </div>
          </div>
        </section>

        <form>
          <input
            type="textarea"
            placeholder="Lägg till deltagare"
            value={this.state.newParticipantName}
            onChange={this.textHandler}
          />
          {/* <label htmlFor="hej1">Roll</label> */}

          <select name="role" onChange={this.optionHandler}>
            <option value="NA">Välj roll</option>
            <option value="NA">Ingen roll</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Tester">Tester</option>
            <option value="ProductOwner">Product owner</option>
            <option value="UX">UX</option>
          </select>
          <select name="savedGroup" onChange={this.optionHandler2}>
            <option value="">Välj sparad klass</option>
            <option value="4">Java HT18</option>

          </select>
          <button className="btn" onClick={this.clickHandler}>
            Lägg till
          </button>
        </form>
      </div>
    );
  }
}

export default AddParticipants;
