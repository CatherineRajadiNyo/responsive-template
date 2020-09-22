import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));

const Routes:FC = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<h1>Loading Page . . .</h1>}>
        <Route exact path="/" component={Home} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;
