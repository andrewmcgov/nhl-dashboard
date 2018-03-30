import React from "react";
import axios from "axios";
import GameCard from "./GameCard";
import "./TodayPanel.css";

class TodayPanel extends React.Component {
  state = {
    games: []
  };
  async componentDidMount() {
    const games = await axios.get(
      "https://statsapi.web.nhl.com/api/v1/schedule"
    );
    this.setState({
      games: games.data.dates[0].games
    });
  }
  renderGame = key => {
    console.log(key);
    const game = {
      home: key.teams.home.team.name,
      homeRecord: key.teams.home.leagueRecord,
      away: key.teams.away.team.name,
      awayRecord: key.teams.away.leagueRecord,
      gameDate: key.gameDate
    };
    return <GameCard key={key.gamePk} game={game} />;
  };

  render() {
    return (
      <div className="today-panel">
        <h2 className="today-title">Todays Games</h2>
        <ul className="games-list">{this.state.games.map(this.renderGame)}</ul>
      </div>
    );
  }
}

export default TodayPanel;
