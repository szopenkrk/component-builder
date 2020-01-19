import React, { Component } from "react";
import './style.css';


class FeedbackContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true
        };
    }

    render() {
        return (
        <div className="feedback-container">
            <div className="grid">
                <div className="box box1">
                    <div>one</div>
                </div>
                <div className="box box2">
                    <div>two</div>
                </div>
                <div className="box box4">
                    <div>four</div>
                </div>
            </div>
        </div>
        );
    };
}

export default FeedbackContainer;
