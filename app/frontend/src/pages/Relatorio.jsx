import React, { useState, useEffect } from 'react';
import GamesTable from '../components/GamesTable';
import Header from '../components/Header';
import AddNewMatchBtn from '../components/AddNewRent';
import LeaderboardBtn from '../components/LeaderboardBtn';
import LoginBtn from '../components/LoginBtn';
import GamerFilter from '../components/GameFilter';
import '../styles/pages/games.css';

const Games = () => {
  const [currentFilter, setCurrentFilter] = useState('Status do Jogo');
  const [isAdm, setIsAdm] = useState(false);
  const [logged, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token') || false;
    const role = localStorage.getItem('role') || false;
    if (token) setLogin(true);
    
    setIsAdm(role === 'admin');
  }, []);

  return (
    <>
      <Header
        page="Resumo dos custos"
        FirstNavigationLink={ AddNewMatchBtn }
        SecondNavegationLink={ LoginBtn }
        logged={ logged }
        setLogin={ setLogin }
      />
      {
        isAdm
          ? (
            <section className="games-section">
        <div className="games-handlers">
          <h1>
            Resumo dos custos:
          </h1>
          <ul>
            <li>
              Entrada: xxxxxx
            </li>
            <li>
              Saida: xxxxxx
            </li>
            <li>
              Imoveis locados: xxxxxx de xxxxxx
            </li>
          </ul>
        </div>
      </section>
          )
          : <h1>Faça Login para acessar as informações</h1>
      }
    </>
  );
};

export default Games;
