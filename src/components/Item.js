import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Item({ artist }) {

  return (
    <div>
      <Link to={`/releases/${artist.name}/${artist.id}`}>
        <p><span>Artist: </span>{artist.name}</p>
      </Link>
      <p><span>Country: </span> {artist.country}</p>
      <p>{artist.id}</p>
    </div>
  );

}

Item.propTypes = {
  artist: PropTypes.object.isRequired
};

export default Item;
