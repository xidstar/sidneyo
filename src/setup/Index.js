import React from 'react';
//react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages
import About from './About'
import Projects from './Projects'
import Error from './Error'
import Home from './Home'
import Navbar from './Navbar'

const ReactRouterSetup = () => {
  return <Router>
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
}

export default ReactRouterSetup;