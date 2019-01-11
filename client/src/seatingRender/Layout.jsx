import React, { Component } from "react";
import Table from "./Table";
import "../css/table.css";
import ChairContainer from "./ChairContainer";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="box">
        {this.props.participants.map((rowdata, i) => (
          <Table participants={rowdata} />
        ))}
        
      </div>
    );
  }
}
export default Layout;


