import React from 'react';
import PropTypes from 'prop-types';

function ArtistItem({ release }) {
  return (
    <div>
      <p>{release.title}</p>
      <p>An Image</p>
    </div>
  );
}

ArtistItem.propTypes = {
  release: PropTypes.object.isRequired,
};

export default ArtistItem;
