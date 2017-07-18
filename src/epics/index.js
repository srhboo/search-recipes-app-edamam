import { combineEpics } from 'redux-observable';
import { fetchRecipes } from '../api/edamam';
import { search, updateResults } from '../actions';
import { ACTION_TYPES } from '../constants/ActionTypes';


const recipeEpic = action$ =>
    action$.ofType(ACTION_TYPES.SEARCH)
    .mergeMap(action => fetchRecipes(action.payload))
    .map(response => response.hits.length ? updateResults(response.hits) : console.log(response));

export default combineEpics(
    recipeEpic
)
