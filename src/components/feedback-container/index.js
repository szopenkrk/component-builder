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
                    <div className='label'>NET PROMOTER SCORE DETAILS</div>
                </div>
                <div className="box box2">
                    <div className='label'>ALL CONSUMERS</div>
                </div>
                <div className="box box4">
                    <div className='label'>FEEDBACK</div>
                </div>
            </div>
        </div>
        );
    };
}

export default FeedbackContainer;
