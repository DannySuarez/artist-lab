import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ArtistItem({ release, artistName }) {
  const image = release['cover-art-archive'].front 
    ? `http://coverartarchive.org/release/${release.id}/front-250` 
    : '/src/images/placeholder.jpg';

  return (
    <div>
      <p>Artist: {artistName} </p>
      <Link to={`/songs/${release.title}/${release.id}`}>
        <p>Name: {release.title}</p>
      </Link>
      <img src={image} />
    </div>
  );
}

ArtistItem.propTypes = {
  release: PropTypes.object.isRequired,
  artistName: PropTypes.string.isRequired
};

export default ArtistItem;
