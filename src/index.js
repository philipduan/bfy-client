import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Matches from './components/matches';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/summoner/:id" component={Matches} />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
