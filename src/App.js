import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
