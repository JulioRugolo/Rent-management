import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LeaderboardTable from '../components/LeaderboardTable';
import LoginBtn from '../components/LoginBtn';
import MatchesBtn from '../components/MatchesBtn';
import TableFilter from '../components/TableFilter';
import '../styles/pages/leaderboard.css';

const Leaderboard = () => {
  const [logged, setLogin] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('Classificação Geral');

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLogin(!!token);
  }, [logged, setLogin]);

  return (
    <>
      <Header
        page="NOVA LOCAÇÃO"
        SecondNavegationLink={ LoginBtn }
        logged={ logged }
        setLogin={ setLogin }
      />
      <div className="classification-handlers score-board-table-section">
        
      </div>
    </>
  );
};

export default Leaderboard;
