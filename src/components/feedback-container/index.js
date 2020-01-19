import React, {Component} from "react";
import './style.css';
// import label from './label.png';


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
                        <div className="feedback-wrapper">
                            <div className={'user'}>
                                <div className={'name'}> Charlote Hanson</div>
                                <div className={'status'}>Resident</div>
                                <div className={'date'}>14 Nov</div>
                                <div className={'label'}><img src={'./images/label.png'}/></div>
                            </div>
                            <div className={'text'}>
                                I don't like food here. It's been a while since I've eaten a good a hoot meal here.
                                It's been a while since I've eaten a good and hot meal. I don't like food here. It's been a while since I've eaten a good a hoot meal here
                            </div>
                            <div className={'actions'}>
                                <button>Reply</button>
                            </div>
                        </div>
                        <hr />
                        <div className="feedback-wrapper">
                            <div className={'user'}>
                                <div className={'name'}> Charlote Hanson</div>
                                <div className={'status'}>Resident</div>
                                <div className={'date'}>14 Nov</div>
                                <div className={'label'}><img src={'./images/label.png'}/></div>
                            </div>
                            <div className={'text'}>
                                I don't like food here. It's been a while since I've eaten a good a hoot meal here.
                                It's been a while since I've eaten a good and hot meal. I don't like food here. It's been a while since I've eaten a good a hoot meal here
                            </div>
                            <div className={'actions'}>
                                <button>Reply</button>
                            </div>
                        </div>
                        <hr />
                        <div className="feedback-wrapper">
                            <div className={'user'}>
                                <div className={'name'}> Charlote Hanson</div>
                                <div className={'status'}>Resident</div>
                                <div className={'date'}>14 Nov</div>
                                <div className={'label'}><img src={'./images/label.png'}/></div>
                            </div>
                            <div className={'text'}>
                                I don't like food here. It's been a while since I've eaten a good a hoot meal here.
                                It's been a while since I've eaten a good and hot meal. I don't like food here. It's been a while since I've eaten a good a hoot meal here
                            </div>
                            <div className={'actions'}>
                                <button>Reply</button>
                            </div>
                        </div>
                        <hr />
                        <div className="feedback-wrapper">
                            <div className={'user'}>
                                <div className={'name'}> Charlote Hanson</div>
                                <div className={'status'}>Resident</div>
                                <div className={'date'}>14 Nov</div>
                                <div className={'label'}><img src={'./images/label.png'}/></div>
                            </div>
                            <div className={'text'}>
                                I don't like food here. It's been a while since I've eaten a good a hoot meal here.
                                It's been a while since I've eaten a good and hot meal. I don't like food here. It's been a while since I've eaten a good a hoot meal here
                            </div>
                            <div className={'actions'}>
                                <button>Reply</button>
                            </div>
                        </div>
                        <hr />
                        <div className="feedback-wrapper">
                            <div className={'user'}>
                                <div className={'name'}> Charlote Hanson</div>
                                <div className={'status'}>Resident</div>
                                <div className={'date'}>14 Nov</div>
                                <div className={'label'}><img src={'./images/label.png'}/></div>
                            </div>
                            <div className={'text'}>
                                I don't like food here. It's been a while since I've eaten a good a hoot meal here.
                                It's been a while since I've eaten a good and hot meal. I don't like food here. It's been a while since I've eaten a good a hoot meal here
                            </div>
                            <div className={'actions'}>
                                <button>Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default FeedbackContainer;
