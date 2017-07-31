import React from 'react';
import {OptionsBox} from '../Header/options-box';

export const MobileSearchBox = props => (
    <div>
        <input value={props.input} placeholder="Search Recipes" onChange={ev => props.updateInput(ev.target.value)} /> 
        <OptionsBox {...props} screen="mobile" />
        <a href="#results-anchor"><button className="search-button" onClick={ev => props.search(props.input, props.options)}>Get Cooking!</button></a>
    </div>
);