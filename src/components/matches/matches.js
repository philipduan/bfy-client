import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../containers/header/';
import Match from '../../containers/match/';
import './style.css';
class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summonerName: '',
      matchesDetails: []
    };
  }

  async componentDidMount() {
    let response = await axios.get(
      `https://philip-bfy-server.herokuapp.com/${this.props.match.params.id}`
      //`http://localhost:3001/dev/local`
    );
    await this.setState({
      summonerName: response.data.summonerName,
      matchesDetails: response.data.matchDetailsList
    });
  }

  render() {
    return (
      <div className="matches">
        {this.state.matchesDetails.length !== 0 ? (
          <Header summonerName={this.state.summonerName} />
        ) : null}

        {this.state.matchesDetails.length !== 0
          ? this.state.matchesDetails.map((match, index) => {
              return <Match data={match} key={index} />;
            })
          : null}
      </div>
    );
  }
}

export default Matches;
