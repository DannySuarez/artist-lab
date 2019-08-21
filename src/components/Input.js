import React from 'react';

function Input({  artist, handleSubmit, handleChange, }) {

  return (
    <form onSubmit={handleSubmit}>
      <span>Enter Artist: </span> <input type="text" name="artist" value={artist || []} onChange={handleChange}></input>
      <button>Search</button>
    </form>
  );

}


export default Input;
