import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './components/Missions';
import Profiles from './components/Profiles';
// import Rockets from './components/Rockets';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profiles />} />
      </Routes>
    </div>
  );
}

export default App;
