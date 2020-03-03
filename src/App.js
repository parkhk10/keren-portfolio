import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar'

function App() {
  console.log("changing the switch")
  return (
    <Router>
      <NavBar/>
      <div className="App">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work" render={About}>
            <About />
          </Route>
          <Route path="/play" render={About}>
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  </Router>
  );
}

export default App;
