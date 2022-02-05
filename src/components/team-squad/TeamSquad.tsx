import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../types/stateTypes';
import { ITeamSquad } from '../../types/api-types/teamInfoTypes';
import { PlayerPosition } from '../../constants/common';
import './TeamSquad.scss';

interface IProps {
  teamSquad: Array<ITeamSquad>;
}

const TeamSquad = ({ teamSquad }: IProps) => (
  <article className="team-squad">
    <div>
      <h3>{PlayerPosition.ATTACKER}</h3>
      <div className="team-squad__players">
        {teamSquad.map((player) => player.position === PlayerPosition.Attacker && (
        <span>
          {player.name}
          <br />
        </span>
        ))}
      </div>
    </div>
    <div>
      <h3>{PlayerPosition.MIDFIELDER}</h3>
      <div className="team-squad__players">
        {teamSquad.map((player) => player.position === PlayerPosition.Midfielder && (
        <span>
          {player.name}
          <br />
        </span>
        ))}
      </div>
    </div>
    <div>
      <h3>{PlayerPosition.DEFENDER}</h3>
      <div className="team-squad__players">
        {teamSquad.map((player) => player.position === PlayerPosition.Defender && (
        <span>
          {player.name}
          <br />
        </span>
        ))}
      </div>
    </div>
    <div>
      <h3>{PlayerPosition.GOALKEEPER}</h3>
      <div className="team-squad__players">
        {teamSquad.map((player) => player.position === PlayerPosition.Goalkeeper && (
        <span>
          {player.name}
          <br />
        </span>
        ))}
      </div>
    </div>
  </article>
);

export default connect(
  (state: IState) => ({
    teamSquad: state.teamSquad.squad,
  }),
)(TeamSquad);
