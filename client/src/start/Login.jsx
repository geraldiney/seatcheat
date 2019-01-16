import React, { Component } from 'react';
const url = "http://localhost:8080/api";
class Login extends Component {

      constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          
        };
        this.signIn = this.signIn.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
      }
    
      signIn(User) {
        fetch(url + "/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: User
        })
          .then(response => response.json())
        //   .then(data => this.setState({ user: data }));
      }
    
      changeHandler(event, type) {
        let obj = {};
        obj[type] = event.target.value;
        this.setState(obj);
      }
    
      clickHandler(event) {
        let data = {
          email: this.state.email,
          password: this.state.password
        };
        this.registerNewUser(JSON.stringify(data));
        this.setState({ email: "", password: "" });
      }
    
      render() {
        return (
          <div>
          
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
              Logga in
            </button>
          </div>
        );
      }
    }
    
    export default Login;
    