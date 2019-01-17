import React, { Component } from "react";
const url = "http://localhost:8080/api";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      response: "",
      
    };
    this.registerNewUser = this.registerNewUser.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  registerNewUser(newUser) {
    fetch(url + "/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: newUser
    })
      .then(response => response.json())
      .then(data => this.setState({ response: data.message }));
  }

  changeHandler(event, type) {
    let obj = {};
    obj[type] = event.target.value;
    this.setState(obj);
  }

  clickHandler(event) {
    let data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.registerNewUser(JSON.stringify(data));
    this.setState({ email: "", password: "", name: "" });
  }

  render() {
    return (
      <div>
         <div className="spacer" ></div>
        <h5>Registrera</h5>
        <input
          type="text"
          value={this.state.numberOfRows}
          onChange={event => this.changeHandler(event, "name")}
          placeholder="Namn"
        />
        <input
          type="email"
          value={this.state.numberOfRows}
          onChange={event => this.changeHandler(event, "email")}
          placeholder="Email"
        />
        <input
          type="password"
          value={this.state.seatsPerRow}
          onChange={event => this.changeHandler(event, "password")}
          placeholder="Lösenord"
        />
        <button className="btn" onClick={this.clickHandler}>
          Registrera
        </button>
        <p className="response">{this.state.response}</p> 
      </div>
    );
  }
}

export default Register;
