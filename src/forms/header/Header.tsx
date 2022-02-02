import React from 'react';
import './Header.scss';
import { COMPETITION_PATH } from '../../constants/urlPath';

const Header = () => (
  <header className="header">
    <div className="header__title">
      <span className="header__title__text">Soccer Stats</span>
    </div>
    <div className="header__menu">
      <a href={COMPETITION_PATH}>Лиги</a>
    </div>
    <div className="header__empty" />
  </header>
);

export default Header;
