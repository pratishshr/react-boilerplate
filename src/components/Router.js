import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as routes from '../constants/routes';

import Login from './login';
import Dashboard from './dashboard';

// Top level application router.
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.LOGIN} component={Login} />
      <Route path={routes.DASHBOARD} component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Router;
