import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <AboutMe />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


