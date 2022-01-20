import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

import './App.css';

function App() {
  return (
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container-fluid'>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />        
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
