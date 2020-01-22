import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';
import './style.css';

class Benchmark extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const data = {
            labels: ['January', 'February'],
            datasets: [
                {
                    backgroundColor: ["rgba(0,10,220,0.5)","rgba(220,0,10,0.5)","rgba(220,0,0,0.5)","rgba(120,250,120,0.5)" ],
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, ]
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
        };
        return (
            <div className="benchmark-container">
                <div className={'benchmark-label'}>BENCHMARK</div>
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={barOption}
                />
            </div>
        );
    };
}

export default Benchmark;
