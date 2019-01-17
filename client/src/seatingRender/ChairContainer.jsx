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
            {this.props.participants.map((participant, i) => (
                <div key={i}>
              <span>
                  {participant===null ?<Chair name=""></Chair> : <Chair name={participant.name}></Chair>}
                
              </span></div>
            ))}
            </div>

          );
    }
}

export default ChairContainer;