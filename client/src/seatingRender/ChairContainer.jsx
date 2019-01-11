import React, { Component } from 'react';
import Chair from "./Chair";

class ChairContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    
    }

    render() { 
        return (

            <div id="chair-container">
            {this.props.participants.map(participant => (
              <span key={participant.id}>
                <Chair name={participant.name}></Chair>
              </span>
            ))}
            </div>
// flytta ypp denna till tablex
          );
    }
}

export default ChairContainer;