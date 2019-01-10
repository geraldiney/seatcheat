import React, { Component } from 'react';
import '../css/participant.css';

class ParticipantList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() { 
        return ( 

            <div>
            <h3>Namn: </h3>
            <ul id="participantList">
            {this.props.participants.map(participant => (
              <div key={participant.id}>
                <li>{participant.name}</li>
              </div>
            ))}
            </ul>
           
          </div>

         );
    }
}
 
export default ParticipantList;