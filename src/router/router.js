import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './App';
import NotFound from './NotFound';

const Router = () => {
  return (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Router;