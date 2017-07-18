import React from 'react';

export const SearchSection = ({input, updateInput, search}) => (
  <div className="search-section">
    <span className="search-recipes-label">search recipes:</span>
      <input value={input} onChange={ev => updateInput(ev.target.value)} /> 
      <button className="search-button" onClick={ev => search(input)}>search</button>
  </div>
);

