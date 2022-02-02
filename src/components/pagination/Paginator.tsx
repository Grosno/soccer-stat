import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pagination } from 'antd';
import './Paginator.scss';
import { changeCurrentPageAction, changePageSizeAction } from '../../actions/PaginationAction';
import { IState } from '../../types/stateTypes';
import { DEFAULT_PAGE_SIZE_VALUE } from '../../constants/common';

interface IProps {
  total: number;
  currentPage: number;
  changeCurrentPage: (page: number) => void,
  changePageSize: (pageSize: number) => void,
}
const pageSizeOptions = [10, 20, 30, 50];

const Paginator = ({
  total,
  currentPage,
  changeCurrentPage,
  changePageSize,
}: IProps) => {
  const handleSelectFormClick = (page: number) => {
    changeCurrentPage(page);
  };

  const handleShowSizeChange = (page: number, limit: number) => {
    changePageSize(limit);
  };

  return (
    <div className="paginator">
      <Pagination
        total={total}
        current={currentPage === null ? 0 : currentPage}
        pageSizeOptions={pageSizeOptions}
        onShowSizeChange={handleShowSizeChange}
        defaultPageSize={DEFAULT_PAGE_SIZE_VALUE}
        showSizeChanger
        onChange={handleSelectFormClick}
      />
    </div>
  );
};

export default connect(
  (state: IState) => ({
    total: state.pagination.total,
    currentPage: state.pagination.currentPage,
    pageSize: state.pagination.pageSize,
  }),
  (dispatch) => ({
    changeCurrentPage: bindActionCreators(changeCurrentPageAction, dispatch),
    changePageSize: bindActionCreators(changePageSizeAction, dispatch),
  }),
)(Paginator);
