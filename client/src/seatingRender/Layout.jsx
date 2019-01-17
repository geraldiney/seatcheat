import React, { Component } from "react";
import Table from "./Table";
import "../css/layout.css";

class Layout extends Component {

  render() {



    return (
      <div className="box" style={boxStyle}>
        {this.props.participants.map((rowdata, i) => (
          <div key={i}>
          <Table participants={rowdata} />
          </div>
        ))}
        
      </div>
    );
  }
}
export default Layout;


