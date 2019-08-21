import React from 'react';

function Input({ handleSubmit }) {

  return (
    <form onSubmit={handleSubmit}>
      <span>Enter Artist: </span> <input type="text" name="artist"></input>
      <button>Search</button>
    </form>
  );

}


export default Input;
