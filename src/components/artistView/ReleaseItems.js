import React from 'react';
import PropTypes from 'prop-types';
import ReleaseItem from './ReleaseItem';

function ReleaseItems({ releases }) {

  const releaseList = releases.map(r => {
    return <ReleaseItem release={r} key={r.id} />;
  });

  return (
    <>
      {releaseList}
    </>
  );
  
}

ReleaseItems.propTypes = {
  releases: PropTypes.array.isRequired
};

export default ReleaseItems;
