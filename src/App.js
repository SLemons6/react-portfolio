import React from 'react';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Works from './components/Works';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
