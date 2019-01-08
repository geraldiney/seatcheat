import React, { Component } from 'react';
import "./css/participant.css"

class Participant extends Component {

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

      this.setState({newParticipantName:""});
    event.preventDefault();
  }

  render() {
    const { participants, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="Participants">
      <h1>Lägg till deltagare!</h1>
       <form>
          <input
            type="textarea"
            placeholder="Enter participant"
            value={this.state.newParticipantName}
            onChange={this.textHandler}
          />
          <button onClick={this.clickHandler}>Lägg till</button>
        </form>
        <h3>Namn: </h3>
        <ul id="participantList">
        {participants.map(participant => (
          <div key={participant.id}>
            <li>{participant.name}</li>
          </div>
        ))}
        </ul>
       
      </div>
    );
        }
    }


export default Participant;