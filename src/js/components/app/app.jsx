import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Main from '../components/main';
import { AppRoute } from '../utils/const';
import history from '../history/history';

const App = () => {

    return (
    <Router history={history}>
      <Switch>
        <Route exact path={`${AppRoute.ROOT}`}>
          <Main />
        </Route >
      </Switch >
    </Router >
    );
};

export default App;
