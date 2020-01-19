import React, { Component } from "react";
import './style.css';
// import downIcon from '../images/down.png';


class SmartChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <div className="container">
            <div className="label-container">
                <div className="left-handed-label">
                    {this.props.mainLabel}
                </div>
                <div className={`right-handed-label ${!isNaN(parseFloat(this.props.mainValue)) ? "right-handed-red" : "from-target"}`}>
                    {this.props.mainValue}
                </div>
            </div>
            {this.props.type == 'capacity' &&
                <div className="value-container">
                    <div className={`down-part-left position-left-down-label`}>
                        {this.props.labelLeft}
                    </div>
                    <div className={`down-part-right position-right-down-label`}>
                        {this.props.labelRight}

                    </div>
                <div className="value-container">
                    <div className={`down-part-left position-left-down-label position-only-value`}>
                        {this.props.valueLeft}

                    </div>
                    <div className={`down-part-right position-right-down-label position-only-value`}>
                        {this.props.valueRight}
                    </div>
                </div>
                </div>
            }
            {this.props.type == 'faces' &&
                <div className="value-container">
                    <div className={`down-part-left position-left-down-label`}>
                        {this.props.labelLeft}

                    </div>
                    <div className={`down-part-right position-right-down-label`}>
                        {this.props.labelRight}

                    </div>
                    <div className="value-container">
                        <div className={`down-part-left position-left-down-label position-only-value`}>
                            <img className={'happy'} src={'./images/face1.png'}/>
                            {this.props.valueLeft}

                        </div>
                        <div className={`down-part-right position-right-down-label position-only-value`}>
                            <img className={'midhappy'} src={'./images/face1.png'}/>
                            {this.props.valueRight}
                        </div>
                    </div>
                </div>
            }
            {this.props.type == 'charts' &&
                <div className="value-container">
                    <div className={`down-part-left position-left-down-label`}>
                        {this.props.labelLeft}

                    </div>
                    <div className={`down-part-right position-right-down-label`}>
                        {this.props.labelRight}
                        <div className={'rating-red'}>
                            {this.props.valueRight}
                        </div>

                    </div>
                    <div className="value-container">
                        <div className={`down-part-left position-left-down-label bigger-value`}>
                            {this.props.valueLeft}

                        </div>
                        <div className={`down-part-right position-right-down-label position-only-value`}>
                            <div className={'small-chart'}>
                                Chart
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        );
    };
}

export default SmartChart;
