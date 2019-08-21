import React from 'react';
import Item from './Item';

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

export default Items;
