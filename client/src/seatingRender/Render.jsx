import React, { Component } from 'react';
import SeatingRender from 'SeatingRender';

class Render extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row">
              <SeatingRender
                seatsPerRow={this.state.seatsPerRow}
                participants={this.state.participants}
                fetch={this.fetchScrambledParticipantGroup}
              />
            </div>
         );
    }
}
 
export default Render;