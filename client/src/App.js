import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Home from './components/Home/Home';
import Perfil from './components/Account/Perfil';

import './App.css';

function App() {
  return (
      <div>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<Perfil />} />
        </Routes>
      </div>
  );
}

export default App;
