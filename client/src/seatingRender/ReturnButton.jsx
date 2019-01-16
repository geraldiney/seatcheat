import React, { Component } from "react";


class ReturnButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSeats: false
    };
  }

  render() {
    return (
      <div className=" ">
        <button className="btn" onClick={this.props.showGroupOptions}>
          Till Huvudmeny
        </button>
      </div>
    
    );
  }
}

export default ReturnButton;
