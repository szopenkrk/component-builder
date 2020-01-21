import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2';

import './style.css';

class Donut extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const data = {
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

        return (
            <div className="circle-container">
                <div className={'circle-label'}>BENCHMARK</div>
                <Doughnut data={data} />
            </div>

        );
    };
}

export default Donut;
