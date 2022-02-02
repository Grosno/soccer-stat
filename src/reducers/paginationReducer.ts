import produce from 'immer';
import { CHANGE_CURRENT_PAGE, CHANGE_PAGE_SIZE, CHANGE_PAGINATION_VALUE } from '../constants/actions/pagination';
import { IPaginationActionType } from '../types/actionTypes';
import { IPaginationState } from '../types/stateTypes';
import { DEFAULT_PAGE_SIZE_VALUE } from '../constants/common';

const initialState: IPaginationState = {
  currentPage: 0,
  total: 0,
  pageSize: DEFAULT_PAGE_SIZE_VALUE,
};

const changeCurrentPage = (draft: IPaginationState, page?: number) => {
  draft.currentPage = page || 0;
  return draft;
};

const changePageSize = (draft: IPaginationState, pageSize?: number) => {
  draft.pageSize = pageSize || 0;
  return draft;
};

const changePagination = (draft: IPaginationState, totalItems?: number, pageSize?: number, page?: number) => {
  draft.total = totalItems || 0;
  draft.currentPage = page || 0;
  return draft;
};

export default (state = initialState, action: IPaginationActionType) => produce(
  state,
  (draft: IPaginationState) => {
    switch (action.type) {
      case CHANGE_CURRENT_PAGE: return changeCurrentPage(draft, action.currentPage);
      case CHANGE_PAGE_SIZE: return changePageSize(draft, action.pageSize);
      case CHANGE_PAGINATION_VALUE: return changePagination(draft, action.total, action.pageSize, action.currentPage);
      default: return state;
    }
  },
);
