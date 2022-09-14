import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />        
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
