import logoCL from '../images/logo_cl.png';
import logoPortugal from '../images/portugueseprimeradivision.png';
import logoPL from '../images/logo_premier_league.png';
import logoNetherlands from '../images/logo_eredivisie.png';
import logoBL from '../images/logo_bundesliga.png';
import logoL1 from '../images/logo_ligue_1.png';
import logoSA from '../images/logo_serie_a.png';
import logoLL from '../images/logo_laliga.png';
import logoChampionship from '../images/championship.png';
import logoSAB from '../images/logo_brazil_serie_a.png';
import logoWC from '../images/logo_wc_2018.png';
import logoEuro from '../images/logo-euro_2020.svg';

export const EMPTY_STRING = '';
export const EMPTY_VALUE = '-';

export const DEFAULT_PAGE_SIZE_VALUE = 30;

export enum PlayerPosition {
  DEFENDER = 'Защитник',
  ATTACKER = 'Нападающий',
  GOALKEEPER = 'Вратарь',
  MIDFIELDER = 'Полузащитник',
  Defender = 'Defender',
  Attacker = 'Attacker',
  Goalkeeper = 'Goalkeeper',
  Midfielder = 'Midfielder',
}

export const AvailableLeagues = [
  {
    leagueLogo: logoCL,
    leagueTitle: 'CHAMPIONS LEAGUE',
    leagueArea: 'Europe',
    leagueID: '2001',
  },
  {
    leagueLogo: logoPortugal,
    leagueTitle: 'PRIMEIRA LEAGUE',
    leagueArea: 'Portugal',
    leagueID: '2017',
  },
  {
    leagueLogo: logoPL,
    leagueTitle: 'PREMIER LEAGUE',
    leagueArea: 'England',
    leagueID: '2021',
  },
  {
    leagueLogo: logoNetherlands,
    leagueTitle: 'EREDIVISIE',
    leagueArea: 'Netherlands',
    leagueID: '2003',
  },
  {
    leagueLogo: logoBL,
    leagueTitle: 'BUNDESLIGA',
    leagueArea: 'Germany',
    leagueID: '2002',
  },
  {
    leagueLogo: logoL1,
    leagueTitle: 'LEAGUE 1',
    leagueArea: 'France',
    leagueID: '2015',
  },
  {
    leagueLogo: logoSA,
    leagueTitle: 'SERIE A',
    leagueArea: 'Italy',
    leagueID: '2019',
  },
  {
    leagueLogo: logoLL,
    leagueTitle: 'LA LIGA',
    leagueArea: 'Spain',
    leagueID: '2014',
  },
  {
    leagueLogo: logoChampionship,
    leagueTitle: 'CHAMPIONSHIP',
    leagueArea: 'England',
    leagueID: '2016',
  },
  {
    leagueLogo: logoSAB,
    leagueTitle: 'SERIE A',
    leagueArea: 'Brazil',
    leagueID: '2013',
  },
  {
    leagueLogo: logoWC,
    leagueTitle: 'WORLDCUP',
    leagueArea: 'World',
    leagueID: '2000',
  },
  {
    leagueLogo: logoEuro,
    leagueTitle: 'EUROPE',
    leagueArea: 'Europe Championships',
    leagueID: '2018',
  },
];
