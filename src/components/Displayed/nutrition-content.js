import React from 'react';

export const NutritionContent = ({recipe}) => (
  <div className="nutrition-box">
    <h3>Nutrition Facts</h3>
    <div className="nutrition-label bottom-thick">Per {Math.round(recipe.totalWeight/recipe.yield)} g (1 serving)</div>
    <div className="nutrition-label bottom-med"><b>Amount / % Daily Value</b></div>
    <div className="nutrition-label bottom-thin"><b>Calories</b> {Math.round(recipe.calories/recipe.yield)}</div>
    {recipe.digest.map(type => <div key={type.label} className="nutrition-label bottom-thin digest"><span><b>{type.label}</b> {Math.round(type.total/recipe.yield)} {type.unit}</span> <span>{Math.round(type.daily/recipe.yield)}%</span></div>)}
  </div>
);
