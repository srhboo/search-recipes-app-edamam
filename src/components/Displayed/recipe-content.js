import React from 'react';

export const RecipeContent = ({recipe}) => (
  <div>
    <h4>Ingredients (serves {recipe.yield}) | {Math.round(recipe.calories/recipe.yield)} calories per serving | <a href={recipe.url} target="_blank">Instructions </a></h4>
    {recipe.ingredientLines.map(ingredient => <li className="ingredient-line" key={ingredient}>{ingredient}</li>)}
    <div className="diet-labels"><b>Keywords: </b> 
      { recipe.dietLabels.map(dietLabel => `${dietLabel} `) }
      { recipe.healthLabels.map(healthLabel => `${healthLabel} `)}
    </div>
  </div>

);
