import React from 'react';
import PropTypes from 'prop-types';
import SongItem from './SongItem';

function SongList({ songs }) {

  const songList = songs.map(s => {
    return <SongItem song={s} key={s.id} />;
  });

  return (
    <>
      { songList }
    </>
  );
}

SongList.propTypes = {
  songs: PropTypes.array.isRequired
};

export default SongList;
