import {
  APP_ID_FIELD, APP_ID_VALUE, COMPETITIONS_URL, METHOD_GET,
} from '../constants/footballDataAPI';

export const getAllCompetitions = () => fetch(COMPETITIONS_URL, {
  method: METHOD_GET,
  headers: new Headers({
    [APP_ID_FIELD]: APP_ID_VALUE,
  }),
})
  .then((apiResponse) => apiResponse.json());
