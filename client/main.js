import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/app';
import { Bins } from '../imports/collections/bins';

const history = createBrowserHistory()

const routes = (
  <Router history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.container'));
});