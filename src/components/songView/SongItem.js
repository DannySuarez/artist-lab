import React from 'react';
import PropTypes from 'prop-types';

function SongItem({ song }) {
  return (
    <div>
      <p>{song.title}</p>
    </div>
  );

}

SongItem.propTypes = {
  song:PropTypes.object.isRequired
};

export default SongItem;
