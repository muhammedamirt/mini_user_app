import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Post' element={<Profile />} />
        <Route path='/Gallery' element={<Profile />} />
        <Route path='/ToDo' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
