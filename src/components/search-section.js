import React from 'react';

export const SearchSection = ({input, updateInput, search, showOptions, displayOptions}) => (
  <div className="search-section">
    <div className="search-left">
      <span className="keep-together">
        <input value={input} onChange={ev => updateInput(ev.target.value)} /> 
        < button className="search-button" onClick={ev => search(input)}>Get Cooking!</button>
      </span>
      <div className="advanced-options">
        <div className="options-label" onClick={ev => displayOptions(!showOptions)}>advanced options >></div>
       {
         showOptions ? <div>max calories</div> : null
       }
      </div>
    </div>
    <div className="app-title">find-a-recipe</div>
  </div>
);

