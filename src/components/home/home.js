import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  _handleChange = event => {
    this.setState({ name: event.target.value });
  };

  _handleSubmit = event => {
    this.props.history.push(`/summoner/${this.state.name}`);
  };

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this._handleSubmit}>
          <input
            placeholder="Search A Summoner"
            type="text"
            name="summonerName"
            onChange={this._handleChange}
          />
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Home);
