import React from 'react';
import { shallow } from 'enzyme';
import { ResultsList } from './results-list';
import { ResultsListItem } from './results-list-item';
import { recipeObject, recipeList } from '../../constants/sample-recipe';

describe('results component tests', () => {

    it('should render recipe result title', () => {
        const title = recipeObject.recipe.label;
        const wrapper = shallow(<ResultsListItem {...recipeObject}/>);
        expect(wrapper.contains(title)).toEqual(true);
    });

    it('should render recipe result rounded calories', () => {
        const roundedCalories = Math.round(recipeObject.recipe.calories);
        const wrapper = shallow(<ResultsListItem {...recipeObject}/>);
        expect(wrapper.contains(roundedCalories)).toEqual(true);
    });

    it('should render recipe result servings', () => {
        const servings = recipeObject.recipe.yield;
        const wrapper = shallow(<ResultsListItem {...recipeObject}/>);
        expect(wrapper.contains(servings)).toEqual(true);
    });

    it('should render number of items in results',() => {
        const listLength = recipeList.length;
        const wrapper = shallow(<ResultsList results={recipeList} />);
        expect(wrapper.find(ResultsListItem)).toHaveLength(listLength);
    });

});