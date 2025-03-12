import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Activities from './pages/Activities';
import Psychology from './pages/Psychology';
import Emotions from './pages/Emotions';
import Stress from './pages/Stress';
import Zen from './pages/Zen';
import Mindfulness from './pages/Mindfulness';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/psychology" element={<Psychology />} />
        <Route path="/emotions" element={<Emotions />} />
        <Route path="/stress" element={<Stress />} />
        <Route path="/zen" element={<Zen />} />
        <Route path="/mindfulness" element={<Mindfulness />} />
      </Routes>
    </Router>
  );
}

export default App;
