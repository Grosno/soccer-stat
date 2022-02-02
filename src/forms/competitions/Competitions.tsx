import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ICompetition } from '../../types/apiTypes';
import { IState } from '../../types/stateTypes';
import PreLoader from '../../components/pre-loader/PreLoader';
import { changePaginationAction } from '../../actions/PaginationAction';
import { loadAllCompetitions } from '../../actions/CompetitionsAction';
import { editLimitOfElementsPerPage } from '../../utils/elementsPerPage';
import './Competitions.scss';

interface IProps {
  competitions: Array<ICompetition>;
  totalCompetitions: number;
  isLoading: boolean;
  isLoadingError: boolean;
  currentPage: number;
  pageSize: number;
  loadCompetitions: () => void;
  pagination: (totalItems: number, currentPage: number) => void;
}

const Competitions = ({
  competitions, totalCompetitions, isLoading, isLoadingError, currentPage, pageSize, loadCompetitions, pagination,
}: IProps) => {
  const [limitedCompetitions, setLimitedCompetitions] = useState([] as Array<ICompetition>);

  useEffect(() => {
    loadCompetitions();
  }, []);

  useEffect(() => {
    if (competitions.length !== 0) {
      pagination(totalCompetitions, currentPage);
      setLimitedCompetitions(editLimitOfElementsPerPage(competitions, currentPage - 1));
    }
  }, [competitions]);

  useEffect(() => {
    setLimitedCompetitions(editLimitOfElementsPerPage(competitions, currentPage - 1, pageSize));
  }, [pageSize, currentPage]);

  if (isLoadingError) {
    return (
      <div className="form-error">Извините произошла ошибка, при попытке загрузить данные о Лигах</div>
    );
  }

  return (
    <article className="competitions">
      {isLoading ? <PreLoader /> : (
        limitedCompetitions.map((competition: ICompetition, index: number) => (
          <div className="competitions__text" key={index}>
            <p>{`${index + 1}. Area - ${competition.area.name}. League - ${competition.name}`}</p>
          </div>
        ))
      )}
    </article>
  );
};

export default connect(
  (state: IState) => ({
    competitions: state.competitions.competitions,
    totalCompetitions: state.competitions.count,
    isLoading: state.competitions.isLoading,
    isLoadingError: state.competitions.isLoadingError,
    currentPage: state.pagination.currentPage,
    pageSize: state.pagination.pageSize,
  }),
  (dispatch) => ({
    loadCompetitions: bindActionCreators(loadAllCompetitions, dispatch),
    pagination: bindActionCreators(changePaginationAction, dispatch),
  }),
)(Competitions);
