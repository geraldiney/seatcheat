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
      <div className="">
            <h1>3</h1>

        <h5 className="">Visa placering</h5>
        <button className="btn" onClick={this.props.showGroupOptions}>
          Visa placering
        </button>
       
      </div>
    
    );
  }
}

export default RenderButton;
