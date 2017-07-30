import React from 'react';

export const SearchBox = ({input, search, updateInput, options}) => (
    <span className="keep-together">
        <input value={input} onChange={ev => updateInput(ev.target.value)} /> 
        <button className="search-button" onClick={ev => search(input, options)}>Get Cooking!</button>
    </span>
);