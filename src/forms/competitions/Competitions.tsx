import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ICompetition } from '../../types/apiTypes';
import { IState } from '../../types/stateTypes';
import { loadAllCompetitions } from '../../actions/CompetitionsAction';
import PreLoader from '../../components/pre-loader/PreLoader';

interface IProps {
  competitions: Array<ICompetition>;
  isLoading: boolean;
  isLoadingError: boolean;
  loadCompetitions: () => void;
}

const Competitions = ({
  competitions, isLoading, isLoadingError, loadCompetitions,
}: IProps) => {
  useEffect(() => {
    loadCompetitions();
  }, []);

  if (isLoadingError) {
    return (
      <div className="form-error">Извините произошла ошибка, при попытке загрузить данные о Лигах</div>
    );
  }

  return (
    <div>
      {isLoading ? <PreLoader /> : (
        competitions.map((competition, index) => (
          <div>
            <p>{`${index + 1}. Area - ${competition.area.name}. League - ${competition.name}`}</p>
            {console.log(JSON.stringify(competition.currentSeason))}
          </div>
        ))
      )}
    </div>
  );
};

export default connect(
  (state: IState) => ({
    competitions: state.competitions.competitions,
    isLoading: state.competitions.isLoading,
    isLoadingError: state.competitions.isLoadingError,
  }),
  (dispatch) => ({
    loadCompetitions: bindActionCreators(loadAllCompetitions, dispatch),
  }),
)(Competitions);
