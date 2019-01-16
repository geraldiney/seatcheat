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

        <h5 className="">Placering</h5>
        <section className="padding">
          <div className="testparent">
            <div className="test">
              <div className="curvedarrow1" />
              <div className="curvedarrow2" />
              <div className="curvedarrow3" />
              <div className="curvedarrow4" />
            </div>

            <div className="test">
              <div className="eye" />
              <div className="eye-ball" />
              <div className="eye-pupil" />
            </div>
          </div>
        </section>
        <div className="seating-info-box">
          <div className="seating-info">Val av layout</div>
          <div className="seating-info">Antal bänkrader/grupper</div>
          <div className="seating-info">Antal platser per rad/grupp</div>
        </div>

        <button className="btn" onClick={this.props.showGroupOptions}>
          Visa placering
        </button>
      </div>
    );
  }
}

export default RenderButton;
