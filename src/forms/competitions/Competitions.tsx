import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState } from '../../types/stateTypes';
import PreLoader from '../../components/pre-loader/PreLoader';
import { changePaginationAction } from '../../actions/PaginationAction';
import { loadAllCompetitions } from '../../actions/CompetitionsAction';
import './Competitions.scss';
import CompetitionsTable from '../../components/competitions-table/CompetitionsTable';
import LoadingError from '../../components/loading-error/LoadingError';

interface IProps {
  isLoading: boolean;
  isLoadingError: boolean;
  loadCompetitions: () => void;
}

const Competitions = ({
  isLoading, isLoadingError, loadCompetitions,
}: IProps) => {
  useEffect(() => {
    loadCompetitions();
  }, []);

  if (isLoadingError) {
    return <LoadingError message="Лигах" />;
  }

  return (
    <article className="competitions-form">
      <h2 className="competitions-form__title">Футбольные лиги мира</h2>
      {isLoading ? <PreLoader /> : <CompetitionsTable />}
    </article>
  );
};

export default connect(
  (state: IState) => ({
    isLoading: state.competitions.isLoading,
    isLoadingError: state.competitions.isLoadingError,
  }),
  (dispatch) => ({
    loadCompetitions: bindActionCreators(loadAllCompetitions, dispatch),
    pagination: bindActionCreators(changePaginationAction, dispatch),
  }),
)(Competitions);
