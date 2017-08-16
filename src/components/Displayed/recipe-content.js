import React from 'react';

export const RecipeContent = ({recipe}) => (
  <div>
    <h4>Ingredients for {recipe.yield} servings</h4>
    {recipe.ingredientLines.map(ingredient => <li className="ingredient-line" key={ingredient}><div className="list-bullet">+ </div><div>{ingredient}</div></li>)}
    <h5><a href={recipe.url} target="_blank">Instructions here</a></h5>

    <div className="diet-labels"><b>Keywords: </b> 
      { recipe.dietLabels.map(dietLabel => `${dietLabel} `) }
      { recipe.healthLabels.map(healthLabel => `${healthLabel} `)}
    </div>

  </div>

);
