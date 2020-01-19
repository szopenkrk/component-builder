import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import './style.css';
// import downIcon from '../images/down.png';


class SmartChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const data = {
            labels: ['', '', '', '', '', '', ''],
            datasets: [
                {
                    label: '',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [1500000, 3900000, 3000000, 4100000, 2300000, 1800000, 2000000],
                }
            ]
        };

        const lineOptions = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    },
                }],
                yAxes: [{
                    // stacked: true,
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        // Return an empty string to draw the tick line but hide the tick label
                        // Return `null` or `undefined` to hide the tick line entirely
                        userCallback(value) {
                            // Convert the number to a string and splite the string every 3 charaters from the end
                            value = value.toString();
                            value = value.split(/(?=(?:...)*$)/);

                            // Convert the array to a string and format the output
                            value = value.join('.');
                            return ``;
                        },
                    },
                }],
            },
            legend: {
                display: false,
            },
            tooltips: {
                enabled: false,
            },
        };

        const styles = {
            fontFamily: 'sans-serif',
            textAlign: 'center',
        };
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
                                <div style={styles}>
                                    <Line data={data} options={lineOptions} />
                                </div>
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
