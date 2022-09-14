import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import { Route, Routes } from "react-router-dom";
>>>>>>> 74e32756a3fed964c75c2a16e91f133ed20b532f
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import UserCreate from './components/UserCreate/UserCreate';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/form' element={<UserCreate />} />

      </Routes>
    </BrowserRouter>
=======
      <div>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/home' element={< Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<UserCreate />} />
        </Routes>
      </div>
>>>>>>> 74e32756a3fed964c75c2a16e91f133ed20b532f
  );
}

export default App;
