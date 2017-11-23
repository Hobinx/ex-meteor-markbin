import React from 'react';
import Header from './header';
import BinsList from './bins/bins_list';
import BinsMain from './bins/bins_main';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

export default (props) => {
  return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={BinsList} />
            <Route path='/bins/:binId' component={BinsMain} />
          </Switch>
        </div>
      </Router>
  );
};