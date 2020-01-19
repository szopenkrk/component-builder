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
            Feedback container
        </div>
        );
    };
}

export default FeedbackContainer;
