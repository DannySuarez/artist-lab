import React from 'react';

function Item({ artist }) {

  return (
    <div>
      <p><span>Artist: </span>{artist.name}</p>
      <p><span>Country:</span> {artist.country}</p>
    </div>
  );

}

export default Item;
