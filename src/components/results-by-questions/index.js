import React, {Component} from "react";
import './style.css';
import {Bar, Doughnut} from "react-chartjs-2";


class ResultsByQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true
        };
    }

    render() {

        const dataDonut = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };
        const dataBar = {
            labels: ['Excellent', 'Good', 'Satisfactory', 'Poor', 'Unacceptable'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 0,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [75, 55, 50, 20, 10]
                }
            ]
        };
        return (
            <div className="results-by-question">
                <div className='label'>FEEDBACK</div>
                <div className="grid">
                    <div className="box box1">
                        <div className='label'>How would you qualify the quality for each meal?</div>
                        <Bar
                            data={dataBar}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                    <div className="box box2">
                        <div className='label'>My favourite meal of the day at the facility is:</div>
                        <Doughnut data={dataDonut} />
                    </div>
                    <div className="box box3">
                        <div className='label'>My favourite meal of the day at the facility is:</div>
                        <Bar
                            data={dataBar}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                    <div className="box box4">
                        <div className='label'>My favourite meal of the day at the facility is:</div>
                        <Bar
                            data={dataBar}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    };
}

export default ResultsByQuestions;
