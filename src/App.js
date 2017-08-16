import React, { Component } from 'react';
import './App.css';
import { DisplayedRecipe, ResultsList, SearchSection, WelcomeInstructions, MobileSearchSection } from './components'
import MediaQuery from 'react-responsive';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <div>
            { this.props.recipe.label && this.props.anchor === "recipe" ?
            <div className="window-overlay">
              <div className="recipe-modal">
                <DisplayedRecipe {...this.props} display="desktop" />
              </div>
            </div>
            : null }
            <SearchSection {...this.props}/>
            <div className="recipes-container">
              <div className="container-left">
                {
                  this.props.results.length || this.props.loading ? 
                  <ResultsList {...this.props} display="desktop" /> 
                  : <WelcomeInstructions {...this.props}/>
                }
                
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery query='(max-device-width: 1224px)'>
          { this.props.anchor === "search" ? 
            <MobileSearchSection {...this.props} />
            : this.props.anchor === "results" ?
            <div className="results-mobile-wrapper">
            <ResultsList {...this.props} display="mobile" /> 
            </div>
            : <DisplayedRecipe {...this.props} display="mobile" />
          }
        </MediaQuery>
    </div>
    );
  }
}

export default App;
