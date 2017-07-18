import React from 'react';
import { shallow } from 'enzyme';
import { DisplayedRecipe } from './displayed-recipe';
import { RecipeContent } from './recipe-content';
import { NutritionContent } from './nutrition-content';
import { recipeObject } from '../constants/sample-recipe';

describe('displayed recipe component tests', () => {
    
    it('should render recipe title', () => {
        const recipe = recipeObject.recipe;
        const wrapper = shallow(<DisplayedRecipe recipe={recipe} info="recipe" />);
        const title = recipe.label;
        expect(wrapper.contains(title)).toEqual(true);
    });

    it('should render recipe source link', () => {
        const recipe = recipeObject.recipe;
        const wrapper = shallow(<DisplayedRecipe recipe={recipe} info="recipe"/>);
        const link = <a href={recipe.url}> {recipe.source} </a>;
        expect(wrapper.contains(link)).toEqual(true);
    });

     it('should render recipe section', () => {
        const recipe = recipeObject.recipe;
        const wrapper = shallow(<DisplayedRecipe recipe={recipe} info="recipe"/>);
        expect(wrapper.find(RecipeContent)).toHaveLength(1);
    });


    it('should render nutrition section', () => {
        const recipe = recipeObject.recipe;
        const wrapper = shallow(<DisplayedRecipe recipe={recipe} info="nutrition"/>);
        expect(wrapper.find(NutritionContent)).toHaveLength(1);
    });

});

describe('recipe content component tests', () => {
    it('should render recipe lines', () => {
        const recipe = recipeObject.recipe;
        const ingredientLines = recipe.ingredientLines.length;
        const wrapper = shallow(<RecipeContent recipe={recipe}/>);
        expect(wrapper.find('.ingredient-line')).toHaveLength(ingredientLines);
    });
});

describe('nutrition content component tests', () => {
    it('should render recipe lines', () => {
        const recipe = recipeObject.recipe;
        const nutritionLines = recipe.digest.length;
        const wrapper = shallow(<NutritionContent recipe={recipe}/>);
        expect(wrapper.find('.digest')).toHaveLength(nutritionLines);
    });
});