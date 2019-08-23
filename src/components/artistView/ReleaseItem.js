import React from 'react';
import PropTypes from 'prop-types';

function ArtistItem({ release }) {
  return (
    <div>
      <p>Artist: </p>
      <p>Name: {release.title}</p>
      <img src={`http://coverartarchive.org/release/${release.id}/front-250`}/>
    </div>
  );
}

ArtistItem.propTypes = {
  release: PropTypes.object.isRequired,
};

export default ArtistItem;
