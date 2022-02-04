import { IGeneralCompetition } from '../types/api-types/apiTypes';
import { DEFAULT_PAGE_SIZE_VALUE } from '../constants/common';

export const editLimitOfElementsPerPage = (competitions: Array<IGeneralCompetition>, currentPage: number, limit = DEFAULT_PAGE_SIZE_VALUE) => {
  const paginationStart = Number(currentPage === -1 ? 0 : currentPage) * Number(limit);
  const paginationLimit = (Number(currentPage === -1 ? 0 : currentPage) * Number(limit)) + Number(limit);

  return competitions.slice(paginationStart, paginationLimit);
};
