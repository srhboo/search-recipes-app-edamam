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
            <SearchSection {...this.props}/>
            <div className="recipes-container">
              <div className="container-left">
                <ResultsList {...this.props} display="desktop" />
              </div>
              <div className="container-right">
                {
                  this.props.recipe.label ? <DisplayedRecipe {...this.props} display="desktop"/> : <WelcomeInstructions />
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
