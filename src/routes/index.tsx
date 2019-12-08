import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '@/components/homepage/index';

const Routes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default Routes;
