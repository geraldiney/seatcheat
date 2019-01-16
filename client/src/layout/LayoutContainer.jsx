import React, { Component } from "react";
import "../css/layout.css";

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRows: "",
      seatsPerRow: "",
      rowSeating: true,
      value: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.change = this.change.bind(this);

  }


  changeHandler(event, type) {
    if (type === "rows") {
      this.setState({ numberOfRows: event.target.value });
    } else if (type === "perRow") {
      this.setState({ seatsPerRow: event.target.value });
    } else if (event.target.value === "cinema") {
      this.setState({ rowSeating: true });
    } else if (event.target.value === "groups") {
      this.setState({ rowSeating: false });
    }
  }


  clickHandler(event) {
    let formData = new FormData();
    formData.append("numberOfRows", this.state.numberOfRows);
    formData.append("seatsPerRow", this.state.seatsPerRow);
    formData.append("rowSeating", this.state.rowSeating);
    this.props.addLayout(formData);
  }

  change (event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="">
        <h1>1</h1>
        <h5 className="">Layout</h5>
        <section className="padding">
          <div className="testparent">
            <div className="test">
              <div className="teacher" />
              <div className="testrow" />
              <div className="testrow" />
              <div className="testrow" />
              <div className="testrow" />
            </div>
            <div className="test">
              <div className="teacher" />
              <div className="testround" />
              <div className="testround" />
              <div className="testround" />
              <div className="testround" />
            </div>
          </div>
        </section>
        {/* <label className="radio">
            <input name="seating" type="radio" onClick={event => this.changeHandler(event, "cinema")}></input>
            Fyll ut rader
          </label> */}
        {/* <label className="radio">
            <input name="seating" type="radio" onClick={event => this.changeHandler(event, "groups")}></input>
            Jämna grupper
          </label> */}
        {/* <select  id="layoutOption" onChange={this.change} value={this.state.value}> */}
        <select onChange={event => this.changeHandler(event)}>
          <option>Välj layout</option>
          <option value="cinema">Fyll upp rader framifrån</option>
          <option value="groups">Dela i jämna grupper</option>
        </select>

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

        <button className="btn" onClick={this.clickHandler}>
          Spara
        </button>
      </div>
    );
  }
}

export default LayoutContainer;
