import React from 'react';

export const SearchSection = ({input, updateInput, search}) => (
  <div className="search-section">
    <div className="search-left">
    <div className="search-recipes-label">Search for the Perfect Recipe:</div>
      <input value={input} onChange={ev => updateInput(ev.target.value)} /> 
      <button className="search-button" onClick={ev => search(input)}>Get Cooking!</button>
    </div>
    <div className="app-title">recipe search</div>
  </div>
);

