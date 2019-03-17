import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import HomePage from 'pages/HomePage';
import CanteenPage from 'pages/CanteenPage';
import NotFoundPage from 'pages/NotFoundPage';
import Header from 'components/Header';
import CartPage from 'pages/CartPage';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/cart" exact component={CartPage} />
      <Route path="/canteens/:canteenUid" exact component={CanteenPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </ConnectedRouter>
);

export default RootRouter;
