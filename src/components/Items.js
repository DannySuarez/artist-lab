import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function Items({ artists }) {
  
  const artistsList = artists.map(a => {
    return <Item artist={a} key={a.id} />;
  });

  return (
    <>
    { artistsList }
    </>
  );
}

Items.propTypes = {
  artists: PropTypes.array.isRequired
};

export default Items;
