import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SongItem({ song, artistName }) {
  return (
    <div>
      <Link to={`/lyrics/${artistName}/${song.title}/`}>
        <p>{song.title}</p>
      </Link>
    </div>
  );

}

SongItem.propTypes = {
  song: PropTypes.object.isRequired,
  artistName: PropTypes.string.isRequired
};

export default SongItem;
