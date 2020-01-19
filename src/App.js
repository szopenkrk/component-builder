import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import FilterMenu from "./components/filters-menu";
import SmartChart from './components/smart-chart';
import FeedbackContainer from './components/feedback-container';
import Benchmark from "./components/benchmark";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div className="App">
            <div className="menu"></div>
            <FilterMenu/>
            <div className="App-header">
                Header
            </div>
            <div className="App-dashboard">
                <SmartChart
                    type={'faces'}
                    mainLabel={'sentiment analisis'}
                    labelLeft={'Reviews site'}
                    valueLeft={'+50'}
                    labelRight={'Private Surveys'}
                    valueRight={'0'}
                />
                <SmartChart
                    type={'capacity'}
                    mainLabel={'capacity'}
                    mainValue={'-1,2%'}
                    labelLeft={'Residence'}
                    valueLeft={'54'}
                    labelRight={'Beds Available'}
                    valueRight={'15'}
                />
                <SmartChart
                    type={'charts'}
                    mainLabel={'RATING'}
                    valueLeft={'4.6'}
                    valueRight={'-1.2%'}
                    addStar={true}
                />
                <SmartChart
                    type={'charts'}
                    mainLabel={'NPS SCORE'}
                    mainValue={'FROM TARGET'}
                    valueLeft={'+32'}
                    valueRight={'+1.2%'}
                />
                <SmartChart
                    type={'charts'}
                    mainLabel={'CER SCORE'}
                    mainValue={'FROM TARGET'}
                    valueLeft={'92%'}
                    valueRight={'+1.2%'}
                />
                <SmartChart
                    type={'labelValue'}
                    mainLabel={'capacity'}
                    labelLeft={'TEST1'}
                    leftValue={'54'}
                    labelRight={'Test2'}
                    valueRight={'15'}
                />

                <FeedbackContainer/>
                <Benchmark/>
            </div>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

