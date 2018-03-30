import React from "react";

class GameCard extends React.Component {
  render() {
    const { away, home, awayRecord, homeRecord, gameDate } = this.props.game;
    const gameTime = new Date(gameDate)
      .toLocaleTimeString()
      .replace(":00 ", " ");
    return (
      <div className="game-card">
        <li className="game-list-item">
          <div className="team-info">
            <div className="away-team">
              <span className="team-name">{away}</span>
              <span className="team-record">
                {`${awayRecord.wins}-${awayRecord.losses}-${awayRecord.ot}`}
              </span>
            </div>
            <div className="home-team">
              <span className="team-name">{home}</span>
              <span className="team-record">
                {`${homeRecord.wins}-${homeRecord.losses}-${homeRecord.ot}`}
              </span>
            </div>
          </div>
          <div className="game-info">
            <span className="game-time">{gameTime}</span>
          </div>
        </li>
      </div>
    );
  }
}

export default GameCard;
