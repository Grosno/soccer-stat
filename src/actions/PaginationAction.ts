import { CHANGE_CURRENT_PAGE, CHANGE_PAGE_SIZE, CHANGE_PAGINATION_VALUE } from '../constants/actions/pagination';
import { IPaginationActionType } from '../types/actionTypes';

export const changeCurrentPageAction = (page: number): IPaginationActionType => ({
  type: CHANGE_CURRENT_PAGE,
  currentPage: page,
});

export const changePageSizeAction = (pageSize: number): IPaginationActionType => ({
  type: CHANGE_PAGE_SIZE,
  pageSize,
});

export const changePaginationAction = (totalItems: number, currentPage: number): IPaginationActionType => ({
  type: CHANGE_PAGINATION_VALUE,
  total: totalItems,
  currentPage,
});
