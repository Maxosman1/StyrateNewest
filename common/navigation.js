import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Subscription } from '../pages/subscription';
import { Home } from '../pages/home';
import { SubscriptionPlan } from '../pages/subscription/plan';
import { New } from '../pages/home/tabs/showdown/new';
import { Trending } from '../pages/home/tabs/showdown/trending';
import { ContestDetails } from '../pages/home/tabs/contests/contestDetails';
import { JoinContest } from '../pages/home/tabs/contests/joinContest';

export const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/new" component={New} />
        <Route path="/trending" component={Trending} />
        <Route path="/subscription" component={Subscription} />
        <Route path="/subscription_plan" component={SubscriptionPlan} />
        <Route path="/contest_details" component={ContestDetails} initialParams={{ id: null, title: null }} />
        <Route path="/join_contest" component={JoinContest} initialParams={{ id: null, title: null }} />
      </Switch>
    </Router>
  );
};