import React from 'react';
import ListTemps from './containers/ListTemps';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Detail from './containers/Detail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListTemps} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
