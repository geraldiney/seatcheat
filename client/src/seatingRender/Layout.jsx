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
          <Table key={i} participants={rowdata} />
        ))}
        
      </div>
    );
  }
}
export default Layout;

// {this.props.participants.map(participant => (
//     <span key={participant.id}>
//       <Chair name={participant.name}></Chair>
//     </span>
//   ))}
