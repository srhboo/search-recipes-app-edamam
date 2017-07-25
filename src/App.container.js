import { connect } from 'react-redux';
import { updateInput, search, displayRecipe, switchInfo, setError, displayOptions, minCalChange,
         maxCalChange, labelsChange, ingredientsChange } from './actions';
import App from './App.js'

const mapStateToProps = state => ({
  input: state.input,
  results: state.results,
  recipe: state.recipe,
  info: state.info,
  error: state.error,
  showOptions: state.showOptions,
  loading: state.loading,
  options: state.options
});

const mapDispatchToProps = {
  updateInput,
  search,
  displayRecipe,
  switchInfo,
  displayOptions,
  minCalChange,
  maxCalChange,
  labelsChange,
  ingredientsChange
};

export default connect(mapStateToProps, mapDispatchToProps)(App);