import React, { Component } from 'react';
import "../css/layout.css";

class Chair extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (


            <div className="chair"><p>{this.props.name}</p></div>



          );
    }
}
 
export default Chair;