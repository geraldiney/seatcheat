import React, { Component } from "react";
import "../css/layout.css";


class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRows: "",
      seatsPerRow: "",
      rowSeating: true
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(event, type) {
    if (type === "rows") {
      this.setState({ numberOfRows: event.target.value });
    } else if (type === "perRow") {
      this.setState({ seatsPerRow: event.target.value });
    } else if (type === "cinema") {
      this.setState({ rowSeating: true })
    } else if (type === "groups") {
      this.setState({ rowSeating: false })
    }
  }

  clickHandler(event) {
    let formData = new FormData();
    formData.append("numberOfRows", this.state.numberOfRows);
    formData.append("seatsPerRow", this.state.seatsPerRow);
    formData.append("rowSeating", this.state.rowSeating);
    this.props.addLayout(formData);
    this.setState({ numberOfRows: "", seatsPerRow: "" });
  }


  render() {
    return (
      <div className="layout card">
        <h5 className="card-title">Välj layout</h5>
        <div>
          <label className="radio">
            <input name="seating" type="radio" onClick={event => this.changeHandler(event, "cinema")}></input>
            Fyll ut rader
          </label>
          <label className="radio">
            <input name="seating" type="radio" onClick={event => this.changeHandler(event, "groups")}></input>
            Jämna grupper
          </label>
        </div>

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
