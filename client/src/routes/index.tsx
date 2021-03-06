import React from 'react';
import { Route as ReactDOMRoute, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Menu from '../pages/Menu';
import Home from '../pages/Home';
import Queue from '../pages/Queue';
import MenuForm from '../pages/MenuForm';

const Routes: React.FC = () => {
  return (
    <Switch>
      <ReactDOMRoute path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <ReactDOMRoute path="/menu" exact component={Menu} />

      <Route path="/menu/new" isPrivate component={MenuForm} />
      <Route path="/menu/:id/edit" isPrivate component={MenuForm} />
      <Route path="/profile" isPrivate component={Profile} />
      <Route path="/dashboard" isPrivate exact component={Dashboard} />
      <Route path="/dashboard/orders" isPrivate component={Queue} />
    </Switch>
  );
};

export default Routes;
