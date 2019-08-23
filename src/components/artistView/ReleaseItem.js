import React from 'react';
import PropTypes from 'prop-types';

function ArtistItem({ release }) {
  
  const image = release['cover-art-archive'].front 
    ? `http://coverartarchive.org/release/${release.id}/front-250` 
    : '/src/images/placeholder.jpg';

  return (
    <div>
      <p>Artist: </p>
      <p>Name: {release.title}</p>
      <img src={image} />
    </div>
  );
}

ArtistItem.propTypes = {
  release: PropTypes.object.isRequired,
};

export default ArtistItem;
