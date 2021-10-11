import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  LetsTalk,
  AboutMe,
  Portfolio,
  FrontEnd,
  BackEnd,
} from './pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/lest-talk" component={LetsTalk} />
    <Route exact path="/about-me" component={AboutMe} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/portfolio/front-end" component={FrontEnd} />
    <Route exact path="/portfolio/back-end" component={BackEnd} />
  </Switch>
);

export default Routes;
