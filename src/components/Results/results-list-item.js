import React from 'react';

export const ResultsListItem = (props) => (
  <li onClick={ev => props.displayRecipe(props.recipe)}> 
    <h4>{props.recipe.label}</h4>
    <div className="result-description">from <a href={props.recipe.url}> {props.recipe.source} </a></div>
  </li>
);
