import React, { Component } from 'react';
import SeatingRender from "./SeatingRender";

class RenderButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderSeats: false
        }
        this.renderSeat = this.renderSeat.bind(this);

    }


    renderSeat() {
        this.setState({
            renderSeats: !this.state.renderSeats
        });
    }

    render() {
        let seats = null;

        if (this.state.renderSeats) {
            seats = <SeatingRender participants={this.state.participants} />;
        }

        return (
            <div className="card">
                <h5 className="card-title">Visa placering</h5>
                <button className="btn" onClick={this.renderSeat}>
                    Visa placering
                </button>
                {seats}
            </div>


        );
    }
}

export default RenderButton;