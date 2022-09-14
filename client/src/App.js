import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
