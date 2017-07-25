import React, { Component } from 'react';
import './App.css';
import { DisplayedRecipe, NutritionContent, RecipeContent, ResultsList, ResultsListItem, SearchSection, SectionLink, WelcomeInstructions } from './components'

class App extends Component {

  constructor(props){
    super(props);
  }


  render() {
    const { updateInput, 
            input, 
            results, 
            search, 
            displayRecipe, 
            recipe, 
            info, 
            switchInfo,
            options,
            minCalChange,
            maxCalChange,
            labelsChange,
            ingredientsChange } = this.props;

    return (
      <div>
        <SearchSection {...this.props}/>
        <div className="recipes-container">
          <div className="container-left">
          <ResultsList {...this.props} />
          </div>
          <div className="container-right">
            {
              recipe.label ? <DisplayedRecipe info={info} recipe={recipe} switchInfo={switchInfo} /> : <WelcomeInstructions />
            }
          </div>
        </div>
      </div>
    
    );
  }
}

export default App;
