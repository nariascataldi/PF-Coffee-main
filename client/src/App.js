import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Home from './components/Home/Home';
import Perfil from './components/Account/Perfil';
import HomeAdmin from './components/Admin/HomeAdmin/HomeAdmin';

import './App.css';

function App() {
  return (
      <div>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<Perfil />} />
          <Route exact path='/homeAdmin' element={<HomeAdmin />} />

        </Routes>
      </div>
  );
}

export default App;
