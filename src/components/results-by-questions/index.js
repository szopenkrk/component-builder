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
                    backgroundColor: ["rgba(0,10,220,0.5)","rgba(220,0,10,0.5)","rgba(220,0,0,0.5)","rgba(120,250,120,0.5)" ],
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [75, 55, 50, 20, 10],
                    minBarLength: 10,
                    barThickness: 6,
                    maxBarThickness: 8,
                }
            ]
        };
        const barOption = {
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            layout: {padding: {left: 10, right: 10, top: 0, bottom: 0}},
            scales: {
                xAxes: [{ticks: {autoSkip: true}, barPercentage: 0.1}],
                yAxes: [{ticks: {beginAtZero: true, max: 100, }}]
            }
        }

        const donutOptions = {
            maintainAspectRatio: false,
            cutoutPercentage: 70,
            responsive: false,
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 10
                }
            }
        }
        return (
            <div className="results-by-question">
                <div className='label'>FEEDBACK</div>
                <div className="grid">
                    <div className="box box1">
                        <div className='label'>How would you qualify the quality for each meal?</div>
                        <div className="bar-position">
                            <Bar
                                data={dataBar}
                                width="360px"
                                height="160px"
                                options={barOption}
                            />
                        </div>
                    </div>
                    <div className="box box2">
                        <div className='label'>My favourite meal of the day at the facility is:</div>
                        <div className={'centerContent'}>
                            <Doughnut
                                data={dataDonut}
                                options={donutOptions}
                                height="140px"
                            />
                        </div>
                    </div>
                    <div className="box box3">
                        <div className='label'>My favourite meal of the day at the facility is:</div>
                        <div className="bar-position">
                            <Bar
                                data={dataBar}
                                width="360px"
                                height="160px"
                                options={barOption}
                            />
                        </div>
                    </div>
                    <div className="box box4">
                        <div className='label'>My favourite meal of the day at the facility is:</div>
                        <div className="bar-position">
                            <Bar
                                data={dataBar}
                                width="360px"
                                height="160px"
                                options={barOption}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default ResultsByQuestions;
