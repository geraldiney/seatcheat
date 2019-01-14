import React, { Component } from "react";
import "../css/layout.css";

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRows: "",
      seatsPerRow: "",
      success: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    // this.addLayout = this.addLayout.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(event, type) {
    if (type === "rows") {
      this.setState({ numberOfRows: event.target.value });
    } else {
      this.setState({ seatsPerRow: event.target.value });
    }
  }

  clickHandler(event) {
    let formData = new FormData();
    formData.append("numberOfRows", this.state.numberOfRows);
    formData.append("seatsPerRow", this.state.seatsPerRow)
    this.props.addLayout(formData);
    this.setState({ numberOfRows: "", seatsPerRow: "" });
  }




  render() {
    return (
      <div className="layout card">
        <h5 className="card-title">Välj layout</h5>
        
        <div className="cinema" />
        <input
          id="rows"
          type="number"
          value={this.state.numberOfRows}
          onChange={event => this.changeHandler(event, "rows")}
          placeholder="Antal bänkrader"
        />
        <input
          id="perRow"
          type="number"
          value={this.state.seatsPerRow}
          onChange={event => this.changeHandler(event, "perRow")}
          placeholder="Antal platser per rad"
        />
        <button className="btn" onClick={this.clickHandler}>Spara!</button>
      </div>
    );
  }
}

export default LayoutContainer;
