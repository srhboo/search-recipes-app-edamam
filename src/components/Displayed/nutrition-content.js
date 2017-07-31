import React from 'react';

export const NutritionContent = ({recipe}) => (
  <div className="nutrition-box">
    <h3>Nutrition Facts</h3>
    <div className="nutrition-label bottom-thick">Per {Math.round(recipe.totalWeight)} g</div>
    <div className="nutrition-label bottom-med"><b>Amount / % Daily Value</b></div>
    <div className="nutrition-label bottom-thin"><b>Calories</b> {Math.round(recipe.calories)}</div>
    {recipe.digest.map(type => <div key={type.label} className="nutrition-label bottom-thin digest"><span><b>{type.label}</b> {Math.round(type.total)} {type.unit}</span> <span>{Math.round(type.daily)}%</span></div>)}
  </div>
);
