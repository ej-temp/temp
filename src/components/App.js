import React from 'react';
import Homepage from './containers/Homepage';
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
        <Route exact path="/" component={Homepage} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
