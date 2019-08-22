import React, { useState } from 'react';
import { getArtist } from '../../services/ArtistApi';
import Input from '../Input';
import Items from '../Items';

function Home() {

  const [initialInput, setInput] = useState({
    artist: '',
    artists: []
  });

  const handleChange = ({ target }) => {
    setInput({ ...initialInput, [target.name]: target.value  });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { artist } = initialInput;
    getArtist(artist).then(artist => {
      setInput({ ...initialInput, artists: artist.artists });
    });
  };
  
  return (
      <>
      <Input artist={initialInput.artist} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Items artists={initialInput.artists}  />
      </>
  );

}

export default Home;
