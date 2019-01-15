import React, { Component } from "react";
import Table from "./Table";
import "../css/layout.css";

class Layout extends Component {

  render() {

    var boxStyle = {
      // border: '2px dashed red', 
      width:'80%'
      //width: this.props.seatsPerRow*110+'px'
    };
    
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


