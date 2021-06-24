import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactInfo from './components/Contact';

export default function App() {
  return (
    <Router>
      <div className='body'>
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <AboutMe />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
          <Route path='/contact' exact>
            <ContactInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


