import React, { Component } from "react";
import Table from "./Table";
import "../css/layout.css";

class Layout extends Component {
  render() {
    return (
      <div>
        <div className="teacher-lg" />
        <div>
          <p className="response">Lärare</p>
        </div>
        <div className="teacher-user" />

        <div className="box">
          {this.props.participants.map((rowdata, i) => (
            <div key={i}>
              <Table participants={rowdata} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Layout;
