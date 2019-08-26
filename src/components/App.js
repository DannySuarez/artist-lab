import React from 'react';
import {  
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import Home from './containers/Home';
import ArtistView from '../components/containers/ArtistView';
import SongView from './containers/SongView';
import Lyrics from './containers/Lyrics';

export default function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/releases/:artistName/:id" component={ArtistView} />
        <Route path="/songs/:artistName/:songName/:id" component={SongView} />
        <Route path="/lyrics/:artistName/:songName/" component={Lyrics} />
      </Switch>
    </Router>
  );
}
