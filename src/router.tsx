import * as React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import getIndexPage from 'routes/IndexPage';
import Main from 'modules/MainWrapper/Page'
function RouterConfig({ history, app }) {

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={getIndexPage(app)} >

        </Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
