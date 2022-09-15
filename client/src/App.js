import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import UserCreate from './components/UserCreate/UserCreate';
import './App.css';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';

function App() {
  return (
    
      <div>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/home' element={< Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<UserCreate />} />
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
{/*<BrowserRouter></BrowserRouter>*/}