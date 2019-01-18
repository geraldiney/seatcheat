import React, { Component } from "react";
import Layout from "./Layout";

class SeatingRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
        scrambledGroup: []
    };
  }
  componentWillMount(){
    this.props.fetch().then(data => {
        this.setState({
          scrambledGroup: data
      });
    })};    
  
  render() {
    
    return <Layout participants={this.state.scrambledGroup} seatsPerRow={this.props.seatsPerRow} currentUser={this.props.currentUser} />;
  }
}

export default SeatingRender;
