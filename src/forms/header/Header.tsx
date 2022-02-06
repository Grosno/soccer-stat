import React, { useEffect } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { COMPETITION_PATH, MAIN_PAGE_PATH } from '../../constants/urlPath';
import { IState } from '../../types/stateTypes';
import { changeCurrentPageAction } from '../../actions/PaginationAction';
import mainLogo from '../../images/main-logo.png';

interface IProps {
  changeCurrentPage: (page: number) => void,
}

const Header = ({ changeCurrentPage }: IProps) => {
  useEffect(() => {
    changeCurrentPage(1);
  }, []);

  const handleClickMenu = () => {
    changeCurrentPage(1);
  };

  return (
    <header className="header">
      <div className="header__title">
        <img src={mainLogo} alt="Main logo" />
        <span className="header__title__text">Soccer Stats</span>
      </div>
      <div className="header__menu">
        <a href={MAIN_PAGE_PATH} onClick={handleClickMenu}>Главная</a>
        <a href={COMPETITION_PATH} onClick={handleClickMenu}>Лиги</a>
      </div>
      <div className="empty" />
    </header>
  );
};

export default connect(
  (state: IState) => state,
  (dispatch) => ({
    changeCurrentPage: bindActionCreators(changeCurrentPageAction, dispatch),
  }),
)(Header);
