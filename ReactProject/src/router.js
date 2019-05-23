import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Index from './routes';
import Demo from './routes/demo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/demo" exact component={Demo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
