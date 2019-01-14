import React, { Component } from 'react';
import "../css/layout.css";
import ChairContainer from './ChairContainer';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (

            <div>
            <div className ="renderedTable">
            </div>
            <ChairContainer participants={this.props.participants}></ChairContainer>
            </div>

          );
    }
}
 
export default Table;


// <div className="box">
// {this.props.participants.map((rowdata, i) => (
//   <Table participants={rowdata} />
// ))}
// }
// </div>
// );