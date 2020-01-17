import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FilterMenu from "./components/filters-menu";
import SmartChart from './components/smart-chart';

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
          <SmartChart />
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

