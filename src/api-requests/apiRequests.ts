import {
  APP_ID_FIELD, APP_ID_VALUE, COMPETITIONS_URL, METHOD_GET, TEAM_INFO_URL,
} from '../constants/footballDataAPI';

// const doGetRequest = (
//   path: string,
//   searchParams?: Record<string, any>,
// ) => {
//   const url = new URL(path, BASE_URL);
//   searchParams && Object.entries(searchParams).forEach((params) => {
//     url.searchParams.append(params[0], params[1].toString());
//   });
// };

export const getAllCompetitions = () => fetch(COMPETITIONS_URL, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
})
  .then((apiResponse) => apiResponse.json());
// if (apiResponse.status >= 400) return { error: 'Ошибка при обращении к данным' };

export const getTeams = (id: string) => fetch(`${COMPETITIONS_URL}/${id}/teams`, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
})
  .then((apiResponse) => apiResponse.json());

export const getMatches = (id: string) => fetch(`${COMPETITIONS_URL}/${id}/matches`, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
})
  .then((apiResponse) => apiResponse.json());

export const getTeamMatches = (id: string) => fetch(`${TEAM_INFO_URL}/${id}/matches`, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
})
  .then((apiResponse) => apiResponse.json());
