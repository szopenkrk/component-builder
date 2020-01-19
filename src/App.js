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

export default function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
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
        <FilterMenu />
        <div className="App-header">
          Header
        </div>
        <div className="App-dashboard">
          <SmartChart
              type={'labelValue'}
              label={'Sentiment Analizis'}
              value={'+54'}
          />
          <SmartChart
              type={'labelValue'}
              mainLabel={'capacity'}
              labelLeft={'TEST1'}
              leftValue={'54'}
              labelRight={'Test2'}
              valueRight={'15'}
          />
          <SmartChart
              type={'labelValue'}
              label={'Rating'}
              value={'+54'}
          />
          <SmartChart type={'labelValue'} label={'NPS SCOPE'} value={'+54'}/>
          <SmartChart type={'labelValue'} label={'CER SCOPE'} value={'+54'}/>
          <SmartChart type={'labelValue'} label={'SURVEYS'} value={'+54'}/>

          <FeedbackContainer />
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

