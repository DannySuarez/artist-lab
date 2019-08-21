import React, { PureComponent } from 'react';
import { getArtist } from '../services/ArtistApi';
import Item from './Item';

export default class Home extends PureComponent {

  componentDidMount() {
    getArtist().then(artist => {
      console.log(artist.artists);
    });
  }
  
  render() {
    
    return (
      
      <>
      <Item />
      </>
    );

  }

}
