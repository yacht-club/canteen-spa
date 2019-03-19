import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import HomePage from 'pages/HomePage';
import CanteenPage from 'pages/CanteenPage';
import NotFoundPage from 'pages/NotFoundPage';
import Header from 'containers/HeaderContainer';
import CartPage from 'pages/CartPage';
import StyledContainer from './components/Container';
import StyledContent from './components/Content';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <Header />
    <StyledContainer>
      <StyledContent>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/canteens/:canteenUid" exact component={CanteenPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </StyledContent>
    </StyledContainer>
  </ConnectedRouter>
);

export default RootRouter;
