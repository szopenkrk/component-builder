import React, { Component } from "react";
import './style.css';


class SmartChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true
        };
    }

    render() {
        return (
        <div className="container">
            <div className="label-container">
                <div className="left-handed-label">
                    Capacity
                </div>
                <div className="right-handed-label">
                    From Target
                </div>
            </div>
            <div className="value-container">
                <div className="left-value-part">
                    +32
                </div>
                <div className="right-value-part">
                    +32
                </div>
            </div>
        </div>
        );
    };
}

export default SmartChart;
