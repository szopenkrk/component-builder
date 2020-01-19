import React, { Component } from "react";
import './style.css';


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
                <div className="right-handed-label">
                    From Target
                </div>
            </div>
            {this.props.type == 'labelValue' &&
                <div className="value-container">
                        {this.props.leftValue}
                    <div className="left-value-part">
                        {this.props.labelLeft}
                    </div>
                        {this.props.labelRight}
                    <div className="right-value-part">
                        {this.props.valueRight}
                    </div>
                </div>
            }
            {this.props.type == 'faces' &&
            <div className="value-container">
                {this.props.leftValue}
                <div className="left-value-part">
                    {this.props.labelLeft}
                </div>
                {this.props.labelRight}
                <div className="right-value-part">
                    {this.props.valueRight}
                </div>
            </div>
            }
            {this.props.type == 'faces' &&
            <div className="value-container">
                {this.props.leftValue}
                <div className="left-value-part">
                    {this.props.labelLeft}
                </div>
                {this.props.labelRight}
                <div className="right-value-part">
                    {this.props.valueRight}
                </div>
            </div>
            }
        </div>
        );
    };
}

export default SmartChart;
