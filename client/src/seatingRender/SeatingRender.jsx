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
      
     console.log(this.state.scrambledGroup);
    })};    
  
  render() {
    
    return <Layout participants={this.state.scrambledGroup} />;
  }
}

export default SeatingRender;
