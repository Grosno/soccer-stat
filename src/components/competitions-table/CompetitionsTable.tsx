import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { IState } from '../../types/stateTypes';
import { IGeneralCompetition } from '../../types/api-types/apiTypes';
import { editLimitOfElementsPerPage } from '../../utils/elementsPerPage';
import { changePaginationAction } from '../../actions/PaginationAction';
import './CompetitionsTable.scss';
import { EMPTY_VALUE } from '../../constants/common';

interface IProps {
  competitions: Array<IGeneralCompetition>;
  totalCompetitions: number;
  currentPage: number;
  pageSize: number;
  pagination: (totalItems: number, currentPage: number) => void;
}

const CompetitionsTable = ({
  competitions, totalCompetitions, currentPage, pageSize, pagination,
}: IProps) => {
  const [limitedCompetitions, setLimitedCompetitions] = useState([] as Array<IGeneralCompetition>);

  useEffect(() => {
    if (competitions.length !== 0) {
      pagination(totalCompetitions, currentPage);
      setLimitedCompetitions(editLimitOfElementsPerPage(competitions, currentPage - 1));
    }
  }, [competitions]);

  useEffect(() => {
    setLimitedCompetitions(editLimitOfElementsPerPage(competitions, currentPage - 1, pageSize));
  }, [pageSize, currentPage]);

  return (
    <table className="competitions-table">
      <tbody>
        <tr>
          <th>Название Лиги</th>
          <th>Страна</th>
          <th>Начало сезона</th>
          <th>Окончание сезона</th>
        </tr>
        {limitedCompetitions.map((competition: IGeneralCompetition, index: number) => (
          <tr key={index}>
            <td><a href={`#/competitions/${competition.id}/teams`}>{competition.name}</a></td>
            <td>{competition.area.name}</td>
            <td>{competition.currentSeason !== null ? moment(competition.currentSeason.startDate).format('DD MMM YYYY') : EMPTY_VALUE}</td>
            <td>{competition.currentSeason !== null ? moment(competition.currentSeason.endDate).format('DD MMM YYYY') : EMPTY_VALUE}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default connect(
  (state: IState) => ({
    competitions: state.competitions.competitions,
    totalCompetitions: state.competitions.count,
    currentPage: state.pagination.currentPage,
    pageSize: state.pagination.pageSize,
  }),
  (dispatch) => ({
    pagination: bindActionCreators(changePaginationAction, dispatch),
  }),
)(CompetitionsTable);
