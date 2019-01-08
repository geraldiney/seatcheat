import React, { Component } from "react";
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
      .then(data => {
        this.setState({ participants: data, isLoading: false });
        console.log(data);
      });
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
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(prevState => ({
          participants: [...prevState.participants, data]
        }));
      });

    event.preventDefault();
  }

  render() {
    const { participants, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="App">
       <form>
          <input
            type="textarea"
            placeholder="Enter participant"
            value={this.state.newParticipantName}
            onChange={this.textHandler}
          />
          <button onClick={this.clickHandler}>Add Participant!</button>
        </form>
        <h2>Participant List </h2>
        {participants.map(participant => (
          <div key={participant.id}>
            Name: {participant.name} Id: {participant.id}
          </div>
        ))}
       
      </div>
    );
  }
}

export default App;
