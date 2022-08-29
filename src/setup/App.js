import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactRouter from './Index';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Navbar from './Navbar';
import Error from './Error';

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default ReactRouterSetup;
