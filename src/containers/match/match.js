import React from 'react';
import './style.css';

const Match = ({ data }) => (
  <div className={`match ${data.outcome}`}>
    <ul>
      <li>{data.outcome}</li>
      <li>{data.duration}</li>
      <li>{data.championId}</li>
      <li>
        <ul>
          <li>{data.summonerSpells.spell1}</li>
          <li>{data.summonerSpells.spell2}</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>{data.runesReforged.primary}</li>
          <li>{data.runesReforged.sub}</li>
        </ul>
      </li>
      <li>{data.championLevel}</li>
      <li>{data.kda}</li>
      <li>
        <ul>
          <li>{`${data.totalCreepsScore} CS`}</li>
          <li>{`${data.creepsScorePerMinute} CS/min`}</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>{data.items.item0 !== undefined ? data.items.item0 : null}</li>
          <li>{data.items.item1 !== undefined ? data.items.item1 : null}</li>
          <li>{data.items.item2 !== undefined ? data.items.item2 : null}</li>
          <li>{data.items.item3 !== undefined ? data.items.item3 : null}</li>
          <li>{data.items.item4 !== undefined ? data.items.item4 : null}</li>
          <li>{data.items.item5 !== undefined ? data.items.item5 : null}</li>
          <li>{data.items.item6 !== undefined ? data.items.item6 : null}</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Match;
