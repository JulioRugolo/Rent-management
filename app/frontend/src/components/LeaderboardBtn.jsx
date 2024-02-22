import React from 'react';
import { Link } from 'react-router-dom';

const LeaderboardBtn = () => (
  <Link data-testid="header__show_classification_btn" to="/location">
    Nova Locação
  </Link>
);

export default LeaderboardBtn;
