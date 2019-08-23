import React from 'react';
import PropTypes from 'prop-types';
import ReleaseItem from './ReleaseItem';

function ReleaseItems({ releases, artistName }) {
  const releaseList = releases.map(r => {
    return <ReleaseItem release={r} key={r.id} artistName={artistName} />;
  });

  return (
    <>
      {releaseList}
    </>
  );
  
}

ReleaseItems.propTypes = {
  releases: PropTypes.array.isRequired,
  artistName: PropTypes.string.isRequired
};

export default ReleaseItems;
