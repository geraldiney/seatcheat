import React, { Component } from 'react';
import Table from "./Table";
import "../css/table.css";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
}}

    render() { 
        return (

            <div className="box">
            <Table participants={this.props.participants}>
            </Table>

            </div>

          );
    }
}
 
export default Layout;