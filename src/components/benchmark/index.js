import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
import './style.css';

class Benchmark extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="benchmark-container">
                <div className={'benchmark-label'}>BENCHMARK</div>
            </div>
        );
    };
}

export default Benchmark;
