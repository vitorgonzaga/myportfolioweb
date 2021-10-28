import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  LetsTalk,
  AboutMe,
  Portfolio,
  FrontEnd,
  BackEnd,
  Repositories,
} from './pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/lesttalk" component={LetsTalk} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/repositories" component={Repositories} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/portfolio/front-end" component={FrontEnd} />
    <Route exact path="/portfolio/back-end" component={BackEnd} />
  </Switch>
);

export default Routes;
