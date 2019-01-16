import React, { Component } from "react";
import Table from "./Table";
import "../css/layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
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


