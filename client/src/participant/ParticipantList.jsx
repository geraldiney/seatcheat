import React, { Component } from "react";

class ParticipantList extends Component {
  constructor(props) {
    super(props);
    this.state = {newGroupName:""};
    this.textHandler = this.textHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }


  clickHandler(event) {
    let formData = new FormData();
    formData.append("name", this.state.newGroupName);
    this.props.participants.forEach((item)=>{
      formData.append("participants", item.id);
    });
    this.props.addGroup(formData);
    this.setState({ newGroupName: ""});
    event.preventDefault();
  }

  textHandler(event) {
    this.setState({ newGroupName: event.target.value });
  }

  render() {
    return (
      <div className="scrollList ">
        {/* <h6 className="">Namn: </h6> */}
        <ul className="list-group list-group-flush">
          {this.props.participants.map(participant => (
            <div key={participant.id}>
              <li>{participant.name} {(participant.participantRole==="NA"||participant.participantRole===null) ? "":", "+participant.participantRole}</li>
            </div>
          ))}
        </ul>
        <h5 className="card-title">Spara grupp</h5>
        <form>
          <input
            type="textarea"
            placeholder="Ange gruppnamn"
            value={this.state.newGroupName}
            onChange={this.textHandler}
          />
          <button className="btn" onClick={this.clickHandler}>Spara grupp</button>
        </form>
      </div>
    );
  }
}

export default ParticipantList;
