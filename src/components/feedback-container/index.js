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
                    <div className={'feedback-value'}>
                        + 32
                    </div>
                    <div className={'feedback-legend'}>
                        NPS = % PROMOTERS - % DETRACTORS
                    </div>
                </div>
                <div className="box box2">
                    <div className='label'>ALL CONSUMERS</div>
                </div>
                <div className="box box4">
                    <div className='label'>FEEDBACK</div>
                    <div className={'feedback-line'}></div>
                </div>
            </div>
        </div>
        );
    };
}

export default FeedbackContainer;
