import React from 'react';
import {SectionLink} from './section-link';
import {RecipeContent} from './recipe-content';
import {NutritionContent} from './nutrition-content';

export const DisplayedRecipe = ({recipe, info, switchInfo}) => { 
  return recipe.label ?  
    <div className="displayed-recipe">
      <h2>{recipe.label}<div className="source-text"> from <a href={recipe.url}> {recipe.source} </a></div></h2> 
      <div className="recipe-details">
        <img src={recipe.image} />
        <div className="section-links">
            <SectionLink title="recipe" switchInfo={switchInfo} selectedInfo={info} />|
            <SectionLink title="nutrition" switchInfo={switchInfo} selectedInfo={info} />
        </div>
        <div className="selected-info">
          {info === 'recipe' ? <RecipeContent recipe={recipe}/> : <NutritionContent recipe={recipe}/>}
        </div>
      </div>
    </div>
  : null 
};