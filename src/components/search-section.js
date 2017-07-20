import React from 'react';

export const SearchSection = ({input, updateInput, search}) => (
  <div className="search-section">
    <div className="search-left">
    <span className="search-recipes-label">find the perfect recipe:</span>
      <span className="keep-together">
      <input value={input} onChange={ev => updateInput(ev.target.value)} /> 
      <button className="search-button" onClick={ev => search(input)}>Get Cooking!</button>
      </span>
    </div>
    <div className="app-title">recipebook</div>
  </div>
);

