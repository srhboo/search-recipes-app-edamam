import React from 'react';

export const ResultsListItem = (props) => (
  <li onClick={ev => props.displayRecipe(props.recipe)}> 
    <h4>{props.recipe.label}</h4>
    <span className="result-description">{Math.round(props.recipe.calories)} calories | serves {props.recipe.yield}</span>
  </li>
);
