import React, { Component } from "react";

class RenderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSeats: false
    };
  }

  render() {
    return (
      <div className="card">
        <h5 className="card-title">Visa placering</h5>
        <button className="btn" onClick={this.props.showGroupOptions}>
          Visa placering
        </button>
       
      </div>
    
    );
  }
}

export default RenderButton;
