import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Works from './components/Works';

import './App.css';

function App() {
  return (
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container-fluid'>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/works' component={Works} />
          <Route path='/contact' component={Contact} />        
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
