import React from 'react';
import PropTypes from 'prop-types';
import SongItem from './SongItem';

function SongList({ songs, artistName }) {

  const songList = songs.map(s => {
    return <SongItem song={s} key={s.id} artistName={artistName} />;
  });

  return (
    <>
      { songList }
    </>
  );
}

SongList.propTypes = {
  songs: PropTypes.array.isRequired,
  artistName: PropTypes.string.isRequired
};

export default SongList;
