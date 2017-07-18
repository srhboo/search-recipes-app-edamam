import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { updateInput, search, displayRecipe, switchInfo } from './actions';
import Chance from 'chance';
import { DisplayedRecipe, NutritionContent, RecipeContent, ResultsList, ResultsListItem, SearchSection, SectionLink } from './components'
export const chance = Chance();

const mapStateToProps = state => ({
  input: state.input,
  results: state.results,
  recipe: state.recipe,
  info: state.info
});

const mapDispatchToProps = {
  updateInput,
  search,
  displayRecipe,
  switchInfo
};


class App extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const { updateInput, input, results, search, displayRecipe, recipe, info, switchInfo } = this.props;
    return (
      <div>
        <div className="recipes-container">
          <div className="container-left">
          <SearchSection {...this.props}/>
          <ResultsList {...this.props} />
          </div>
          <div className="container-right">
          <DisplayedRecipe info={info} recipe={recipe} switchInfo={switchInfo} />
          </div>
        </div>
      </div>
    
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
