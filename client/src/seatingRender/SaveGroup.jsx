import React, { Component } from "react";


class SaveGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGroupName: "",
      success: false,
      message: ""
    };
    this.textHandler = this.textHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.clickHandler2=this.clickHandler2.bind(this)
  }

  clickHandler(event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("name", this.state.newGroupName);
    this.props.participants.forEach((item) => {
      formData.append("participants", item.id);
    });
    this.props.addGroup(formData);
    this.setState({ newGroupName: "" });
    this.setState({
      message: "Din grupp är sparad."
    })
  }

  clickHandler2(event) {
    event.preventDefault();
    this.props.fetch();

  }

  textHandler(event) {
    this.setState({ newGroupName: event.target.value });
  }

  render() {
    return (
      <div className="SaveGroup">
        <h6 className="card-title">Spara grupp?</h6>
        <form>
          <input
            className="input-save-group"
            type="textarea"
            placeholder="Namn"
            value={this.state.newGroupName}
            onChange={this.textHandler}
          />
          <div className="layout">
            <div className="layout-box">
              <button className="btn" onClick={this.props.showGroupOptions}> Till huvudmeny</button>
            </div>
            
            <div className="layout-box">
              <button className="btn" onClick={this.clickHandler}>Spara grupp</button>
              <p className="response">{this.state.message}</p>

            </div>
            <div className="layout-box">
              <button className="btn" onClick={this.clickHandler2}> Placera om</button>
            </div>

          </div>

        </form>

      </div>

    );
  }
}

export default SaveGroup;
