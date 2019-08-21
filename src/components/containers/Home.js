import React, { PureComponent } from 'react';
import { getArtist } from '../../services/ArtistApi';
import Input from '../Input';
import Items from '../Items';

export default class Home extends PureComponent {

  handleSubmit = e => {
    e.preventDefault();
  }

  componentDidMount() {
    getArtist().then(artist => {
      console.log(artist.artists);
    });
  }
  
  render() {
     
    return (
      
      <>
      <Input handleSubmit={this.handleSubmit} />
      <Items />
      </>
    );

  }

}
