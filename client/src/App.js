import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      participants: [],
      isLoading: false,
      newParticipantName: ""
    };

    this.textHandler = this.textHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://localhost:8080/")
      .then(response => response.json())
      .then(data => this.setState({ participants: data, isLoading: false }));
  }

  textHandler(event) {
    this.setState({ newParticipantName: event.target.value });
  }

  clickHandler(event) {
    let formData = new FormData();
    formData.append("name", this.state.newParticipantName);
    fetch("http://localhost:8080/", {
      method: "POST",
      body: formData
    });

    event.preventDefault();
    this.setState(prevState => ({
      participants: [
        ...prevState.participants,
        { name: this.state.newParticipantName }
      ]
    }));
  }

  render() {
    const { participants, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="App">
        <h2>Participant List </h2>
        {participants.map(participant => (
          <div key={participant.id}>{participant.name}</div>
        ))}
        <form>
          <input
            type="textarea"
            placeholder="Enter participant"
            value={this.state.newParticipantName}
            onChange={this.textHandler}
          />
          <button onClick={this.clickHandler}>Add Participant!</button>
        </form>
      </div>
    );
  }
}

export default App;
