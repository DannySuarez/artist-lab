import React from 'react';
import {  
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import Home from './containers/Home';
import ArtistView from '../components/containers/ArtistView';

export default function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/releases/:artistName/:id" component={ArtistView} />
      </Switch>
    </Router>
  );
}
