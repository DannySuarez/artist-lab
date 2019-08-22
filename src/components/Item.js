import React from 'react';
import PropTypes from 'prop-types';

function Item({ artist }) {

  return (
    <div>
      <p><span>Artist: </span>{artist.name}</p>
      <p><span>Country: </span> {artist.country}</p>
    </div>
  );

}

Item.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Item;
