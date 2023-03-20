import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import Profile from './pages/Profile/Profile';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/coming-soon' element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
