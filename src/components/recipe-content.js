import React from 'react';

export const RecipeContent = ({recipe}) => (
  <div>
    <div className="diet-labels"><b>Keywords: </b> 
    { recipe.dietLabels.map(dietLabel => `${dietLabel} `) }
     { recipe.healthLabels.map(healthLabel => `${healthLabel} `)}</div>
    <h4>Ingredients (serves {recipe.yield})</h4>
    {recipe.ingredientLines.map(ingredient => <li className="ingredient-line" key={ingredient}>{ingredient}</li>)}
  </div>
);
