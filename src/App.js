import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

import './App.css';

function App() {
  return (
    <div className=' d-flex flex-column justify-flex-start min-100-vh'>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />        
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
