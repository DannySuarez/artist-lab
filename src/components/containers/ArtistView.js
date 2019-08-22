import React, { useState } from 'react';
import { getReleases } from '../../services/ArtistApi';
import ReleaseItems from '../artistView/ReleaseItems';

function ArtistView() {

  const [releases, setReleases] = useState({
    releases: []
  });

  getReleases()
    .then(r => {
      console.log(r.releases);
    });

  return (
    <>
      <ReleaseItems />
    </>
  );

}

export default ArtistView;
