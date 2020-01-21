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
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    tooltips: {},
                    borderWidth: 0,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, ]
                }
            ]
        };
        return (
            <div className="benchmark-container">
                <div className={'benchmark-label'}>BENCHMARK</div>
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    };
}

export default Benchmark;
