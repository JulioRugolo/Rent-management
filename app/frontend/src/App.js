import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import MatchSettings from './pages/MatchSettings';
import Leaderboard from './pages/Leaderboard';
import Relatorio from './pages/Relatorio';
import Login from './pages/Login';
import NewRent from './pages/NewRent';
import './styles/app.css';

function App() {
  return (
    <Routes>
      <Route path="matches/settings" element={ <MatchSettings /> } />
      <Route path="/rent/new" element={ <NewRent /> } />
      <Route path="/location" element={ <Leaderboard /> } />
      <Route path="/home" element={ <Relatorio /> } />
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Login to="/login" /> } />
    </Routes>
  );
}

export default App;
