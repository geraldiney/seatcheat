import React, { Component } from "react";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      response: ""
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    let user = { email: this.state.email, password: this.state.password };
    fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => localStorage.setItem("accessToken", data.accessToken))
      // .then(data => this.setState({ response: data.message }));
    // .then(window.location.replace("/application"));
  }

  clickHandler(event) {
    event.preventDefault();
    this.loginUser();
    this.setState({ email: "", password: "" });
  }

  textHandler(event, type) {
    if (type === "email") {
      this.setState({ email: event.target.value });
    } else if (type === "password") {
      this.setState({ password: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <div className="spacer" />
        <h5>Logga in</h5>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={event => this.textHandler(event, "email")}
          />
          <input
            type="password"
            placeholder="Lösenord"
            value={this.state.password}
            onChange={event => this.textHandler(event, "password")}
          />

          <button className="btn" onClick={this.clickHandler}>
            Logga in
          </button>
        </form>
        {this.state.message}
      </div>
    );
  }
}

export default LoginContainer;
