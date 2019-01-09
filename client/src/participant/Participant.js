import React, { Component } from 'react';
import "../css/participant.css";
import TableRenderTest from "../renderTest/TableRenderTest";

class Participant extends Component {

constructor(props) {
    super(props);
    this.state = {
    
     
    };
    
   
  }

  componentDidMount() {
    this.setState({ isLoading: true });

   
  }





  render() {
    const { participants, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
  
    );
        }
    }


export default Participant;