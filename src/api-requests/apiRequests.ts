import {
  APP_ID_FIELD, APP_ID_VALUE, COMPETITIONS_URL, METHOD_GET, TEAM_INFO_URL,
} from '../constants/footballDataAPI';

export const getAllCompetitions = () => fetch(COMPETITIONS_URL, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
})
  .then((apiResponse) => {
    if (apiResponse.status === 429) return { errorCode: 429, message: 'Превышен лимит запросов' };
    return apiResponse.json();
  });

export const getTeams = (id: string) => fetch(`${COMPETITIONS_URL}/${id}/teams`, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
})
  .then((apiResponse) => {
    if (apiResponse.status === 429) return { errorCode: 429, message: 'Превышен лимит запросов' };
    return apiResponse.json();
  });

export const getMatches = (id: string) => fetch(`${COMPETITIONS_URL}/${id}/matches`, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
})
  .then((apiResponse) => {
    if (apiResponse.status === 429) return { errorCode: 429, message: 'Превышен лимит запросов' };
    return apiResponse.json();
  });

export const getTeamMatches = (id: string) => fetch(`${TEAM_INFO_URL}/${id}/matches`, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
})
  .then((apiResponse) => {
    if (apiResponse.status === 429) return { errorCode: 429, message: 'Превышен лимит запросов' };
    return apiResponse.json();
  });

export const getTeamInfo = (id: string) => fetch(`${TEAM_INFO_URL}/${id}`, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
})
  .then((apiResponse) => {
    if (apiResponse.status === 429) return { errorCode: 429, message: 'Превышен лимит запросов' };
    return apiResponse.json();
  });

export const getLeaderboardInfo = (id: string) => fetch(`${COMPETITIONS_URL}/${id}/standings`, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
})
  .then((apiResponse) => {
    if (apiResponse.status === 429) return { errorCode: 429, message: 'Превышен лимит запросов' };
    return apiResponse.json();
  });
