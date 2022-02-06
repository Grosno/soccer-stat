import React from 'react';
import './LeagueCard.scss';

interface IProps {
  logoUrl: string;
  title: string;
  area: string;
}

const LeagueCard = ({ logoUrl, title, area }: IProps) => (
  <div className="league-card">
    <div className="league-card__logo"><img className="league-card__img" src={logoUrl} alt="Logo" /></div>
    <div className="league-card__title">
      <h3>{title}</h3>
      <p>{area}</p>
    </div>
  </div>
);

export default LeagueCard;
