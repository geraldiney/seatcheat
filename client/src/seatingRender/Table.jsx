import React, { Component } from 'react';
import "../css/table.css";
import ChairContainer from './ChairContainer';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (

            <div className ="table">
            <ChairContainer participants={this.props.participants}></ChairContainer>

            </div>


          );
    }
}
 
export default Table;