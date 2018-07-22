import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';
const Header = ({ history, summonerName }) => (
  <div className="table-header">
    <button onClick={() => history.push('/')}>Home</button>
    <h1>{`${summonerName} matches history`}</h1>
    <ul>
      <li>Outcome</li>
      <li>Game Duration</li>
      <li>Champion Selected</li>
      <li>Summoner Spells</li>
      <li>Runes Path</li>
      <li>Level</li>
      <li>KDA</li>
      <li>Creep Score</li>
      <li>Items</li>
    </ul>
  </div>
);

export default withRouter(Header);
