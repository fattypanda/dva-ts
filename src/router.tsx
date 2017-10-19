import * as React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history ,app }) {

  const IndexPage = dynamic({
    app,
    models: () => [
      System.import(/* webpackChunkName: "exampleModel" */ './models/example'),
    ],
    component: () => System.import(/* webpackChunkName: "IndexPage" */'./routes/IndexPage'),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
