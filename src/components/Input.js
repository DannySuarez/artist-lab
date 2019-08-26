import React from 'react';
import PropTypes from 'prop-types';

function Input({  artist, handleSubmit, handleChange, }) {

  return (
    <form onSubmit={handleSubmit}>
      <span>Enter Artist: </span> 

      <input 
        type="text"
        name="artist" 
        value={artist || []} 
        onChange={handleChange}>
      </input>

      <button>Search</button>
    </form>
  );

}

Input.propTypes = {
  artist: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Input;
