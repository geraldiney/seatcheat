import React, { Component } from "react";
import "./style.css";

class TableRenderTest extends Component {
  render() {
    return (
      <div className="box">
        <div className="table">
          <div id="chair-container">
            <div className="chair">
              <p>{this.props.name}</p>
            </div>
            <div className="chair" />
            <div className="chair" />
            <span className="stretch" />
          </div>
        </div>
      </div>
    );
  }
}

export default TableRenderTest;
