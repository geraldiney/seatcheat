import React, { Component } from 'react';
import Layout from './Layout';

class SeatingRender extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            
            <Layout participants={this.props.participants}/>

         );
    }
}
 
export default SeatingRender;